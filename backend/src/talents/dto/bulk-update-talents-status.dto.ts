import { IsNotEmpty, IsEnum } from 'class-validator';

import { BulkUpdateTalentIdsDto } from './';
import { TalentStatus } from '../enum';

export class BulkupdateTalentsStatus extends BulkUpdateTalentIdsDto {
  @IsNotEmpty()
  @IsEnum(TalentStatus)
  mode: string;
}
