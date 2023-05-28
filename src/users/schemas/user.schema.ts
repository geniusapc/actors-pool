import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
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

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ select: false })
  passwordChangedOn?: Date;

  @Prop({
    type: mongoose.Types.ObjectId,
    trim: true,
  })
  talentId?: ObjectId;
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
    delete ret['__v'];
    return ret;
  },
});

export const UserSchema = schema;
