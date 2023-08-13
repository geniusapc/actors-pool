import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as moment from 'moment';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, minlength: 2, trim: true })
  firstname: string;

  @Prop({ minlength: 2, trim: true })
  lastname: string;

  @Prop({ unique: true, required: true, lowercase: true, trim: true })
  email: string;

  @Prop({ trim: true, default: 'User', enum: ['User', 'Admin'] })
  role: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ default: null, select: false })
  passwordChangedOn?: Date;

  @Prop({ default: null, select: false })
  resetToken?: string;

  @Prop({ default: null, select: false })
  resetTokenExpires?: Date;

  @Prop({ default: false })
  isVerified?: boolean;

  @Prop({ default: null, select: false })
  verificationToken?: string;

  @Prop({ default: null, select: false })
  verificationTokenExpires?: Date;
}

const schema = SchemaFactory.createForClass(User);

schema.pre('save', async function (next) {
  const user = this as UserDocument;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.passwordChangedOn = moment().toDate();
    user.password = hashedPassword;
  }
  next();
});

schema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password;
    delete ret.passwordChangedOn;
    delete ret.resetToken;
    delete ret.resetTokenExpires;
    delete ret.verificationToken;
    delete ret.verificationTokenExpires;
    delete ret['__v'];
    return ret;
  },
});

export const UserSchema = schema;
