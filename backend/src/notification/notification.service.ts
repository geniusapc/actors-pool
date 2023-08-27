import { Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import Handlebars from 'handlebars';
import { google } from 'googleapis';
import * as fsWithCallbacks from 'fs';
import * as nodemailer from 'nodemailer';

import { Templates } from './enum/template.enum';

const fs = fsWithCallbacks.promises;

interface ISendVerificationMail {
  firstname: string;
  email: string;
  token: string;
}

interface ISendMail {
  mail: string;
  to: string[];
  subject: string;
}

@Injectable()
export class NotificationService {
  private readonly logger = new Logger('Mail');
  private readonly CLIENT_URL = '';

  private static async getTemplate(name: string) {
    const url = path.resolve(__dirname, `../../templates/${name}.html`);
    const html = await fs.readFile(url);
    return Handlebars.compile(html.toString());
  }

  private async sendMail(payload: ISendMail) {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URIS,
    );
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    const assessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        type: 'OAuth2',
        user: process.env.MAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: assessToken.token || '',
      },
    });
    const mailOptions = {
      from: `Actors Pool <${process.env.MAIL}>`,
      to: payload.to,
      subject: payload.subject,
      text: payload.mail,
      html: payload.mail,
    };

    return transporter.sendMail(mailOptions);
  }

  async sendForgottenPasswdMail(payload: ISendVerificationMail): Promise<void> {
    const { firstname, email, token } = payload;
    const resetPasswordLink = `${this.CLIENT_URL}/reset-password?token=${token}&email=${email}`;
    const template = await NotificationService.getTemplate(
      Templates.ResetPassword,
    );
    const mail = template({ firstname, resetPasswordLink });

    await this.sendMail({ mail, to: [email], subject: 'Password Reset' }).catch(
      (e) => this.logger.error(e),
    );
  }

  async sendVerificationMail(payload: ISendVerificationMail): Promise<void> {
    const { firstname, email, token } = payload;
    const verificationLink = `${this.CLIENT_URL}/email-verification?token=${token}&email=${email}`;
    const template = await NotificationService.getTemplate(
      Templates.AccountVerification,
    );
    const mail = template({ firstname, verificationLink });

    await this.sendMail({ mail, to: [email], subject: 'Verify Account' }).catch(
      (e) => this.logger.error(e),
    );
  }
}
