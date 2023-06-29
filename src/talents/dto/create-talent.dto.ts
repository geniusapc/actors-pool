import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { SocailMediaDTO } from './social-media.dto';
import { MoviesDTO } from './movies.dto';

export class CreateTalentDto {
  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  readonly firstname: string;

  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly phoneNumber: number;

  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly profession: string;

  @IsOptional()
  readonly dob?: Date;

  @IsNotEmpty()
  readonly activeSince: Date;

  @IsNotEmpty()
  readonly about: string;

  @ValidateIf((object, value) => typeof value !== 'undefined')
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => SocailMediaDTO)
  socialMedia!: SocailMediaDTO;

  @IsArray()
  @IsOptional()
  movies!: MoviesDTO[];
}
