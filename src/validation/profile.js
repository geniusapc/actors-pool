import { object, string, number, label, date, InferType } from 'yup';

export const personalInfoSchema = object({
  firstname: string().required(),
  lastname: string().required(),
  phoneNumber: string().required(),
  country: string().required(),
  state: string().required(),
  gender: string().required(),
  dob: date().required().label('Date of Birth'),
  activeSince: date().required().label('Active Since'),
});
