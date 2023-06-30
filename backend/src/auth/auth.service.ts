import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { User } from '../users/schemas/user.schema';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private readonly logger = new Logger('Auth');

  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    const parsedUser = user.toJSON();
    return { ...parsedUser, accessToken: this.jwtService.sign(payload) };
  }

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(
      { email: username },
      { select: '+password' },
    );
    if (!user) return null;
    const passwordMatch = await bcrypt.compare(pass, user?.password);
    return passwordMatch ? user : null;
  }

  async ensureNewPasswordIsUnique(userId: string, pass: string): Promise<void> {
    const user = await this.usersService.findById(userId, {
      select: '+password',
    });
    if (!user) throw new BadRequestException('Invalid user');
    const passwordMatch = await bcrypt.compare(pass, user?.password);
    if (passwordMatch)
      throw new BadRequestException('Password matches current password');
  }
}
