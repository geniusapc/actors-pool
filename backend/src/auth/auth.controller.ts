import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  Logger,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { Request } from 'express';
import { Public } from './decorators/meta';
import { LocalAuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { VerifyAccountDto } from './dto/verify-account.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { TransformResponseInterceptor } from 'src/response.interceptor';
import { NotificationService } from 'src/notification/notification.service';

@Controller('auth')
@UseInterceptors(TransformResponseInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly notificationService: NotificationService,
  ) {}

  private readonly logger = new Logger('Auth');

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signin(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('/signup')
  async signup(@Body() body: CreateUserDto): Promise<void> {
    await this.usersService.create(body);
    const user = await this.authService.createAccountVerificationToken(
      body.email,
    );
    await this.notificationService.sendVerificationMail(user);
  }

  @HttpCode(204)
  @Post('/change-password')
  async changePassword(
    @Body() body: ChangePasswordDto,
    @Req() req: Request,
  ): Promise<void> {
    const { _id: userId } = req.user;
    const { oldPassword, newPassword } = body;

    await this.authService.changePwdAndValidateOldPwd(
      userId,
      oldPassword,
      newPassword,
    );
  }

  @HttpCode(204)
  @Post('/resend-verify-mail')
  async resendVerificationMail(@Req() req: Request): Promise<void> {
    const { email } = req.user;
    const user = await this.authService.createAccountVerificationToken(email);
    await this.notificationService.sendVerificationMail(user);
  }

  @Public()
  @HttpCode(204)
  @Post('/verify-account')
  async verifyAccount(@Body() body: VerifyAccountDto): Promise<void> {
    const { email, token } = body;
    await this.authService.verifyAccount(email, token);
  }

  @Public()
  @HttpCode(204)
  @Post('/forgot-password')
  async sendForgotPasswordMail(@Body() body: ForgotPasswordDto): Promise<void> {
    try {
      const user = await this.authService.createForgotPasswordToken(body.email);
      await this.notificationService.sendForgottenPasswdMail(user);
    } catch (error) {}
  }

  @Public()
  @HttpCode(204)
  @Post('/reset-password')
  async resetPassword(@Body() body: ResetPasswordDto): Promise<void> {
    const { email, token, password } = body;
    await this.authService.resetPassword(email, token, password);
  }
}
