import { Type, Transform } from 'class-transformer';
import {
  // IsArray,
  // IsDateString,
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
  @IsNumber()
  @MinLength(10)
  @MaxLength(20)
  readonly phoneNumber?: string;

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
  // @IsDateString()
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

  // @IsArray()
  @ValidateIf((object, value) => {
    return typeof value !== 'undefined';
  })
  @Transform((value) => {
    return value;
  })
  @ValidateNested({ each: true })
  movies!: MoviesDTO[];
}
