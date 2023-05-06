import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IMovie, IGallery, ISocialMedia } from '../interfaces';

export type TalentDocument = HydratedDocument<Talent>;

@Schema()
export class Talent {
  @Prop({ required: true, minlength: 2, trim: true })
  firstname: string;

  @Prop({ required: true, minlength: 2, trim: true })
  lastname: string;

  @Prop({ minlength: 2, trim: true })
  phoneNumber?: string;

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
    raw({
      id: { type: String },
      title: { type: String },
      date: { type: Date },
    }),
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

export const TalentSchema = SchemaFactory.createForClass(Talent);
