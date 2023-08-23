import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class BulkUpdateTalentIdsDto {
  @IsNotEmpty()
  ids: ObjectId[];
}
