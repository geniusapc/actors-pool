import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterQuery, Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Roles } from './enum';
import { defaultAdminUser } from './data/user.data';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  private readonly logger = new Logger(UsersService.name);

  async onModuleInit() {
    try {
      this.logger.log('Checking admin user ...');
      const created = await this.createAdminUser();
      if (created) this.logger.log('Created admin user');
    } catch (error) {
      this.logger.error('Error creating admin user', error);
    }
  }

  private async createAdminUser(): Promise<boolean> {
    const user = await this.userModel.findOne({ role: Roles.Admin });
    if (user) return false;
    await this.userModel.create(defaultAdminUser);
    return true;
  }

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
