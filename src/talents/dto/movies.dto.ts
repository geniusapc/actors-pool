import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class MoviesDTO {
  @MaxLength(50)
  @MinLength(2)
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @MaxLength(4)
  @MinLength(4)
  @IsOptional()
  @IsString()
  readonly year: string;
}
