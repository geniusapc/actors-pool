import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
  Validate,
} from 'class-validator';
import { CustomValidatePassword } from './CustomValidation/password';

export class CreateUserDto {
  @IsNotEmpty()
  readonly firstname: string;

  @IsOptional()
  readonly lastname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @Validate(CustomValidatePassword)
  @MaxLength(50, {
    message: "The password can't accept more than 50 characters",
  })
  @MinLength(8, { message: 'The min length of password is 8' })
  @IsNotEmpty()
  password: string;
}
