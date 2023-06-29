import { IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator';

export class ChangePasswordDto {
  @MaxLength(50, {
    message: "The password can't accept more than 50 characters",
  })
  @MinLength(8, { message: 'The min length of password is 8' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
