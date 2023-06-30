import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customPassword', async: false })
export class CustomValidatePassword implements ValidatorConstraintInterface {
  validate(text: string) {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    return regex.test(text);
  }

  defaultMessage() {
    return 'The password must contain at least one uppercase, one lowercase, one number, and one special character.';
  }
}
