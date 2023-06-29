import { IsNotEmpty, MaxLength, MinLength, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @MaxLength(25)
  @MinLength(2)
  @IsNotEmpty()
  name: string;

  @IsOptional()
  talents: string[];
}
