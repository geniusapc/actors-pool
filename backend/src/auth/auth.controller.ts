import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  Logger,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Public } from './decorators/meta';
import { LocalAuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResponseDTO } from 'src/response.dto';

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
  async signin(@Req() req: Request, @Res() res: Response) {
    const user = await this.authService.login(req.user);
    const message = 'Signin successful';
    const response = new ResponseDTO(HttpStatus.OK, message, user);
    return response.send(res);
  }

  @Public()
  @Post('/signup')
  async signup(
    @Body() body: CreateUserDto,
    @Res() res: Response,
  ): Promise<any> {
    const user = await this.usersService.create(body);
    const message = 'Signup successful';
    const response = new ResponseDTO(HttpStatus.OK, message, user);
    return response.send(res);
  }

  @Post('/change-password')
  async changePassword(
    @Body() body: ChangePasswordDto,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    await this.usersService.changePassword(req.user._id, body.password);
    const message = 'Password changed successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, null);
    return response.send(res);
  }
}
