import { IsNotEmpty, IsEnum } from 'class-validator';

import { BulkUpdateTalentIdsDto } from './';
import { TalentVisibility } from '../enum';

export class BulkupdateTalentsVisibility extends BulkUpdateTalentIdsDto {
  @IsNotEmpty()
  @IsEnum(TalentVisibility)
  mode: string;
}
