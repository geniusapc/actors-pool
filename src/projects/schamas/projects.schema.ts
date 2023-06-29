import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Talent } from '../../talents/schemas/talents.schema';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false,
})
export class Project {
  @Prop({ required: true, minlength: 2, trim: true })
  name: string;

  @Prop({
    required: true,
    autopopulate: true,
    type: mongoose.Types.ObjectId,
  })
  user: mongoose.Types.ObjectId;

  @Prop({
    type: [
      { type: mongoose.Types.ObjectId, autopopulate: true, ref: () => Talent },
    ],
  })
  talents: mongoose.Types.ObjectId[];
}

const schema = SchemaFactory.createForClass(Project);

export const ProjectSchema = schema;
