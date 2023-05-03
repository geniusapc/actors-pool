import { Module } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserDocument, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;

          schema.pre('save', async function (next) {
            const user = this as UserDocument;
            if (user.isModified('password')) {
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(user.password, salt);
              user.password = hashedPassword;
            }
            next();
          });

          schema.set('toJSON', {
            transform(doc, ret) {
              delete ret.password;
              delete ret['__v'];
              return ret;
            },
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
