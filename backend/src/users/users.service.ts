import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { FilterQuery, UpdateQuery, Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { v4 as uuid } from 'uuid';
import * as moment from 'moment';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Events, Roles } from './enum';
import { defaultAdminUser } from './data/user.data';
import { UserCreatedEvent } from './events/user-created.event';

type createUser = UserDocument & {
  createdAt: Date;
};
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private eventEmitter: EventEmitter2,
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

  async createAccountVerificationToken(email: string) {
    const user = await this.findOne({ email });
    if (!user) throw new BadRequestException('Invalid user');
    if (user.isVerified) throw new BadRequestException('User already verified');

    const verificationToken = uuid();
    const verificationTokenExpires = moment().add(7, 'd').toDate();
    await this.updateOne(
      { email },
      { verificationToken, verificationTokenExpires },
    );

    return {
      token: verificationToken,
      email: user.email,
      firstname: user.firstname,
    };
  }

  async registerNewUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    const user = await createdUser.save();

    // Emit an event for a registered user
    const {
      _id,
      firstname,
      lastname,
      email,
      role,
      verificationToken,
      createdAt,
    } = user as createUser;

    const createdUserEvent = new UserCreatedEvent();
    Object.assign(createdUserEvent, {
      _id,
      firstname,
      lastname,
      email,
      role,
      verificationToken,
      createdAt,
    });

    this.eventEmitter.emit(Events.CreateUser, createdUserEvent);

    return user;
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
  ): Promise<UserDocument | null> {
    const users = await this.userModel.findOne(condition, options?.select);
    return users;
  }

  async updateOne(condition: FilterQuery<User>, update: UpdateQuery<User>) {
    const users = await this.userModel.updateOne(condition, update);
    return users;
  }

  async findById(
    id: Types.ObjectId,
    options?: { select: string },
  ): Promise<UserDocument | null> {
    return this.userModel.findById(id, options?.select);
  }

  async deleteAccount(userId: string): Promise<void> {
    const userDeleted = await this.userModel.findOneAndDelete({ _id: userId });
    if (!userDeleted) throw new BadRequestException('Invalid user');
  }
}
