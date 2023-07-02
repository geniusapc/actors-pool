import { CreateTalentDto } from '../dto/create-talent.dto';

export interface IGetTalentQuery {
  q: string;
  limit: string;
  skip: string;
  select: string;
  'q.age.eq': string;
  'q.age.lte': string;
  'q.age.gte': string;
  'q.gender': string;
  'q.language': string;
}

export interface CreateTalent extends CreateTalentDto {
  userId?: string;
  gallery: { photo: string }[];
}

export interface IGetTalentByIdQuery {
  select: string;
}

export interface ICreateTalentMulterFiles {
  gallery: Array<Express.Multer.File>;
}

export interface ISocialMedia {
  ig: string;
  tw: string;
  fb: string;
  tik: string;
  yt: string;
  snap: string;
}
