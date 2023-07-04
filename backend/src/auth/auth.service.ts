import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/schemas/user.schema';

import { JwtService } from '@nestjs/jwt';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private readonly logger = new Logger('Auth');

  // Account verification
  private async getVerificationToken(
    email: string,
    token: string,
  ): Promise<UserDocument | null> {
    return this.usersService.findOne({
      email,
      verificationToken: token,
      verificationTokenExpires: { $gt: Date.now() },
    });
  }

  // reset verification
  private async getResetPwdToken(
    email: string,
    token: string,
  ): Promise<UserDocument | null> {
    return this.usersService.findOne({
      email,
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() },
    });
  }

  private async nullifyResetToken(email: string): Promise<void> {
    await this.usersService.updateOne(
      { email },
      { resetToken: null, resetExpires: null },
    );
  }

  async verifyAccount(email: string, token: string): Promise<void> {
    const user = await this.getVerificationToken(email, token);
    if (!user) throw new BadRequestException('Invalid token');
    if (user.isVerified)
      throw new BadRequestException('Account already verified');
    await this.usersService.updateOne(
      { email: user.email },
      {
        verificationTokenExpires: null,
        verificationToken: null,
        isVerified: true,
      },
    );
  }

  async createAccountVerificationToken(email: string) {
    const user = await this.usersService.findOne({ email });
    if (!user) throw new BadRequestException('Invalid user');
    if (user.isVerified) throw new BadRequestException('User already verified');

    const verificationToken = uuid();
    const verificationTokenExpires = moment().add(7, 'd').toDate();
    await this.usersService.updateOne(
      { email },
      { verificationToken, verificationTokenExpires },
    );

    return {
      token: verificationToken,
      email: user.email,
      firstname: user.firstname,
    };
  }

  async createForgotPasswordToken(
    email: string,
  ): Promise<{ token: string; email: string; firstname: string }> {
    const user = await this.usersService.findOne({ email });
    if (!user) throw new BadRequestException('Invalid user');

    const resetToken = uuid();
    const resetTokenExpires = moment().add(1, 'd').toDate();
    await this.usersService.updateOne(
      { email },
      { resetToken, resetTokenExpires },
    );
    return { token: resetToken, email: user.email, firstname: user.firstname };
  }

  async resetPassword(email: string, token: string, password: string) {
    const user = await this.getResetPwdToken(email, token);
    if (!user) throw new BadRequestException('Invalid token');
    await this.changePassword(user._id, password);
    await this.nullifyResetToken(user?.email);
  }

  async changePassword(
    userId: Types.ObjectId,
    password: string,
  ): Promise<void> {
    const user = await this.usersService.findById(userId, {
      select: '+password',
    });
    if (!user) throw new BadRequestException('Invalid user');
    const passwordMatch = await bcrypt.compare(password, user?.password);
    if (passwordMatch)
      throw new BadRequestException('Password matches current password');
    user.password = password;
    user.save();
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    const parsedUser = user.toJSON();
    return { ...parsedUser, accessToken: this.jwtService.sign(payload) };
  }

  async validateUser(username: string, pass: string): Promise<UserDocument> {
    const user = await this.usersService.findOne(
      { email: username },
      { select: '+password' },
    );
    if (!user) throw new BadRequestException('Invalid email or password');
    const passwordMatch = await bcrypt.compare(pass, user?.password);
    if (!passwordMatch)
      throw new BadRequestException('Invalid email or password');
    return user;
  }
}
