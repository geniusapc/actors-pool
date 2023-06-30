import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  Logger,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Public } from './decorators/meta';
import { LocalAuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { TransformResponseInterceptor } from 'src/response.interceptor';

@Controller('auth')
@UseInterceptors(TransformResponseInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
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
  async signup(@Body() body: CreateUserDto): Promise<any> {
    return this.usersService.create(body);
  }

  @Post('/change-password')
  async changePassword(
    @Body() body: ChangePasswordDto,
    @Req() req: Request,
  ): Promise<any> {
    const { _id: userId } = req.user;
    const { password } = body;
    await this.authService.ensureNewPasswordIsUnique(userId, password);
    await this.usersService.changePassword(userId, password);
    return;
  }
}
