import { Injectable } from '@nestjs/common';
import { Talent } from './schemas/talents.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  ICreateTalentMulterFiles,
  IGetTalentByIdQuery,
  IGetTalentQuery,
} from './interfaces';
import { CreateTalentDto } from './dto/create-talent.dto';

type CreateTalent = CreateTalentDto & ICreateTalentMulterFiles;

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent.name) private readonly talentModel: Model<Talent>,
  ) {}
  async create(createTalentDto: CreateTalent) {
    const gallery = createTalentDto?.gallery?.map((e) => ({
      photo: `/gallery/${e.filename}`,
    }));

    const payload = {
      firstname: createTalentDto.firstname,
      lastname: createTalentDto.lastname,
      phoneNumber: createTalentDto.phoneNumber,
      country: createTalentDto.country,
      state: createTalentDto.state,
      dob: createTalentDto.dob,
      about: createTalentDto.about,
      profession: createTalentDto.profession,
      activeSince: createTalentDto.activeSince,
      photo: gallery && gallery[0]?.photo,
      gallery: gallery,
      socialMedia: createTalentDto.socialMedia,
      movies: createTalentDto.movies,
    };

    const talent = await this.talentModel.create(payload);
    return talent;
  }

  async findAll({ query }: { query: IGetTalentQuery | undefined }) {
    const queryBuilder = this.talentModel.find();

    if (query?.q)
      queryBuilder.where({ firstname: { $regex: new RegExp(query?.q, 'i') } });

    // filter/select
    if (query?.select) queryBuilder.select(query?.select.split(','));

    // Set Limit
    if (query?.limit) {
      const defaultLimit = 25;
      const maxLimit = 100;
      const limit = Math.min(Number(query?.limit) || defaultLimit, maxLimit);
      queryBuilder.limit(limit);
    }

    return queryBuilder.exec();
  }

  async findById(
    id: string,
    { query }: { query: IGetTalentByIdQuery | undefined },
  ) {
    const queryBuilder = this.talentModel.findById(id);

    // filter/select
    if (query?.select) queryBuilder.select(query?.select.split(','));
    return queryBuilder.exec();
  }
}
