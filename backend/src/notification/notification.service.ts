import { Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import Handlebars from 'handlebars';
import * as fsWithCallbacks from 'fs';

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

  private async getTemplate(name: string) {
    const url = path.resolve(__dirname, `../../templates/${name}.html`);
    const html = await fs.readFile(url);
    return Handlebars.compile(html.toString());
  }

  private async sendMail(payload: ISendMail) {
    return new Promise((resolve) => resolve(payload));
  }

  async sendForgottenPasswdMail(payload: ISendVerificationMail): Promise<void> {
    const { firstname, email, token } = payload;
    const resetPasswordLink = `${this.CLIENT_URL}/reset-password?token=${token}&email=${email}`;
    const template = await this.getTemplate('resetPassword');
    const mail = template({ firstname, resetPasswordLink });

    this.logger.log(resetPasswordLink);
    await this.sendMail({ mail, to: [email], subject: 'Password Reset' }).catch(
      () => {
        this.logger.error('Issue sending forgotten-password-mail');
      },
    );
  }

  async sendVerificationMail(payload: ISendVerificationMail): Promise<void> {
    const { firstname, email, token } = payload;
    const verificationLink = `${this.CLIENT_URL}/email-verification?token=${token}&email=${email}`;
    const template = await this.getTemplate('accountVerification');
    const mail = template({ firstname, verificationLink });

    this.logger.log(verificationLink);
    await this.sendMail({ mail, to: [email], subject: 'Verify Account' }).catch(
      () => this.logger.error('Issue sending verification-mail'),
    );
  }
}
