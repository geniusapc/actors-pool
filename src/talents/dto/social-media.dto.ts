import { IsOptional, IsString, IsUrl } from 'class-validator';

export class SocailMediaDTO {
  @IsUrl()
  @IsOptional()
  @IsString()
  readonly ig: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly tw: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly fb: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly tik: string;
}
