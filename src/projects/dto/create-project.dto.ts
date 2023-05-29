import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateProjectDto {
  @MaxLength(25)
  @MinLength(2)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  talents: string[];
}
