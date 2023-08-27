import { ObjectId } from 'mongodb';

export class UserCreatedEvent {
  _id: ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  verificationToken: string;
  createdAt: Date;
}
