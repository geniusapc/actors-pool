import { ArrayNotEmpty, IsArray, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateTopTalentDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsMongoId({ each: true })
  talentIds: ObjectId[];
}
