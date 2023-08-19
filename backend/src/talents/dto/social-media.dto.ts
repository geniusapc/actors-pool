import { IsOptional, IsString, IsUrl } from 'class-validator';

export class SocailMediaDTO {
  @IsUrl()
  @IsOptional()
  @IsString()
  readonly instagram: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly twitter: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly facebook: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly tiktok: string;

  @IsUrl()
  @IsOptional()
  @IsString()
  readonly snapchat: string;
}
