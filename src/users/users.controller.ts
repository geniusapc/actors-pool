import { Controller, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { ResponseDTO } from 'src/response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Delete('/my-profile')
  async deleteAccount(@Req() req: Request, @Res() res: Response): Promise<any> {
    const { _id } = req?.user;
    const userDeleted = await this.usersService.deleteAccount(_id);

    const message = 'Account deleted successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, userDeleted);
    return response.send(res);
  }
}
