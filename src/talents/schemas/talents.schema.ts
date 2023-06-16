import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IMovie, IGallery, ISocialMedia } from '../interfaces';

export type TalentDocument = HydratedDocument<Talent>;

@Schema({ timestamps: true })
export class Talent {
  @Prop({ required: true, minlength: 2, trim: true })
  firstname: string;

  @Prop({ required: true, minlength: 2, trim: true })
  lastname: string;

  @Prop({
    required: true,
    minlength: 2,
    trim: true,
    index: true,
    unique: true,
    lowercase: true,
  })
  username: string;

  @Prop({ minlength: 2, trim: true })
  phoneNumber?: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    trim: true,
    unique: true,
    sparse: true,
  })
  userId?: ObjectId;

  @Prop({ default: null, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
  rating?: number;

  @Prop({ required: true, minlength: 2, trim: true })
  country: string;

  @Prop({ required: true, minlength: 2, trim: true })
  state: string;

  @Prop({ required: true, minlength: 2, trim: true })
  profession: string;

  @Prop({})
  dob?: Date;

  @Prop({ trim: true, default: null })
  activeSince: Date;

  @Prop({ default: true })
  recieveDirectMessage: boolean;

  @Prop({ default: true })
  isProfileVisible: boolean;

  @Prop({})
  photo: string;

  @Prop(
    raw([
      {
        photo: { type: String },
      },
    ]),
  )
  gallery: IGallery[];

  @Prop({})
  about: string;

  @Prop(
    raw([
      {
        title: { type: String },
        year: { type: Date, default: null },
      },
    ]),
  )
  movies: IMovie[];

  @Prop(
    raw({
      ig: { type: String, default: null },
      tw: { type: String, default: null },
      fb: { type: String, default: null },
      tik: { type: String, default: null },
      yt: { type: String, default: null },
      snap: { type: String, default: null },
    }),
  )
  socialMedia?: ISocialMedia;
}

const schema = SchemaFactory.createForClass(Talent);

export const TalentSchema = schema;
