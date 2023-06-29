import { PartialType } from '@nestjs/mapped-types';
import { CreateTalentDto } from './create-talent.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTalentDto extends PartialType(CreateTalentDto) {
  @Transform(({ value }) => value?.toLowerCase() === 'true')
  @IsBoolean()
  @IsOptional()
  isProfileVisible: boolean;

  @Transform(({ value }) => value?.toLowerCase() === 'true')
  @IsBoolean()
  @IsOptional()
  recieveDirectMessage: boolean;
}
