import { object, string, date, array } from 'yup';

export const personalInfoSchema = object({
  firstname: string().required().label('First name').min(2).max(50),
  lastname: string().required().label('Last name').min(2).max(50),
  phoneNumber: string().required().label('Phone number'),
  country: string().required().label('Country of residence'),
  state: string().required().label('State of residence'),
  gender: string().required().label('Gender'),
  dob: date().required().label('Date of Birth'),
  activeSince: date().required().label('Active Since'),
}).required('Please fill the form');

export const aboutSchema = string().required().min(25).max(225).label('About');

export const movieSchema = object({
  title: string().required().label('Movie title').min(2).max(50),
  year: date().optional().label('Year').min(4, 'Invalid year').max(4000, 'Invalid year'),
});

export const moviesSchema = array(movieSchema);

export const gallerySchema = array(string().label('Photo').required())
  .label('gallery')
  .min(1, 'Please upload a photo')
  .required();
