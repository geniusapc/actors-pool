import { object, string, date, array } from 'yup';

const countWords = (text) => {
  const words = text.trim().split(/\s+/);

  return words.length;
};

export const personalInfoSchema = object({
  firstname: string().required().label('First name').min(2).max(50),
  lastname: string().required().label('Last name').min(2).max(50),
  phoneNumber: string().required().label('Phone number'),
  country: string().required().label('Country of residence'),
  state: string().required().label('State of residence'),
  gender: string().required().label('Gender'),
  dob: date().required().label('Date of Birth'),
  activeSince: date().required().label('Active Since'),
  languages: array().required().label('Languages'),
}).required('Please fill the form');

export const aboutSchema = string()
  .required()
  .test('wordCount', 'about must should be between 10 to 120 words', (value) => {
    const wordCount = countWords(value);
    const minWordCount = 10;
    const maxWordCount = 120;
    return minWordCount <= wordCount && wordCount <= maxWordCount;
  })
  .label('About');

export const movieSchema = object({
  title: string().required().label('Movie title').min(2).max(50),
  year: date().optional().label('Year'),
});

export const moviesSchema = array(movieSchema);

export const gallerySchema = array(string().label('Photo').required())
  .label('gallery')
  .min(1, 'Please upload a photo')
  .required();

const URL =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const socialLinksSchema = object({
  instagram: string().matches(URL, 'Enter a valid instagram url').label('Instagram'),
  twitter: string().matches(URL, 'Enter a valid twitter url').optional().label('Twitter'),
  facebook: string().matches(URL, 'Enter a valid facebook url').label('Facebook'),
  tiktok: string().matches(URL, 'Enter a valid tiktok url').label('Tiktok'),
  snapchat: string().matches(URL, 'Enter a valid snapchat url').label('Snapchat'),
});
