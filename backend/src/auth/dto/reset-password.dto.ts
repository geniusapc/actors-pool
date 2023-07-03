import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { CustomValidatePassword } from 'src/users/dto/CustomValidation/password';

export class ResetPasswordDto {
  @MaxLength(225)
  @IsString()
  @IsNotEmpty()
  readonly token: string;

  @IsNotEmpty()
  @Validate(CustomValidatePassword)
  @MaxLength(50, {
    message: "The password can't accept more than 50 characters",
  })
  @MinLength(8, { message: 'The min length of password is 8' })
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
