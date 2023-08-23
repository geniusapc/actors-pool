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
  'q.activeSince': string;
  'q.isProfileVisible': boolean;
}

export interface CreateTalent extends CreateTalentDto {
  userId?: string;
  isProfileVisible?: boolean;
  status?: string;
  gallery: { photo: string }[];
}

export interface IGetTalentByIdQuery {
  select: string;
}

export interface ICreateTalentMulterFiles {
  gallery: Array<Express.Multer.File>;
}

export interface ISocialMedia {
  instagram: string;
  twitter: string;
  facebook: string;
  tiktok: string;
  snapchat: string;
}
