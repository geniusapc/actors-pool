import { Controller, Delete, Req, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/my-profile')
  async myAccount(@Req() req: Request): Promise<any> {
    const { _id } = req?.user;
    return this.usersService.findById(_id);
  }

  @Delete('/my-profile')
  async deleteAccount(@Req() req: Request): Promise<any> {
    const { _id } = req?.user;
    return this.usersService.deleteAccount(_id);
  }
}
