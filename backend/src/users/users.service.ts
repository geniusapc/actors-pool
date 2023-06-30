import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterQuery, Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Roles } from './enum';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async countUsers(options?: { [key: string]: string }) {
    return this.userModel.countDocuments(options);
  }

  async countAdmin() {
    return this.userModel.countDocuments({ role: Roles.Admin });
  }

  async findOne(
    condition: FilterQuery<User>,
    options?: { select: string },
  ): Promise<User | null> {
    const users = await this.userModel.findOne(condition, options?.select);
    return users;
  }

  async findById(
    id: string,
    options?: { select: string },
  ): Promise<User | null> {
    return this.userModel.findById(id, options?.select);
  }

  async changePassword(userId: string, password: string): Promise<void> {
    const user = await this.userModel.findById(userId, '+password');
    if (!user) throw new BadRequestException('Invalid user');
    user.password = password;
    user.save();
  }

  async deleteAccount(userId: string): Promise<void> {
    const userDeleted = await this.userModel.findOneAndDelete({ _id: userId });
    if (!userDeleted) throw new BadRequestException('Invalid user');
  }
}
