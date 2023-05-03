import { Body, Controller, Post, UseGuards, Req, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Public } from './decorators/meta';
import { LocalAuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
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
  async signup(@Body() body: CreateUserDto) {
    const user = await this.usersService.create(body);
    return user;
  }
}
