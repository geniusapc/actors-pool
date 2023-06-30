import { IsNotEmpty, MinLength, MaxLength, Validate } from 'class-validator';
import { CustomValidatePassword } from 'src/users/dto/CustomValidation/password';

export class ChangePasswordDto {
  @IsNotEmpty()
  @Validate(CustomValidatePassword)
  @MaxLength(50, {
    message: "The password can't accept more than 50 characters",
  })
  @MinLength(8, { message: 'The min length of password is 8' })
  @IsNotEmpty()
  password: string;
}
