import { Injectable } from '@nestjs/common';
import { Talent } from './schemas/talents.schema';
import { Model, ObjectId } from 'mongoose';
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

  async getTopTalents() {
    return this.talentModel
      .find({ score: { $exists: true } })
      .select('score firstname lastname profession photo about')
      .sort({ score: -1 })
      .lean();
  }

  async addTopTalents(ids: ObjectId[]) {
    const talentUpdates = [];
    const talents = await this.talentModel
      .find({ score: { $exists: true } })
      .select('score')
      .lean();

    for (const key in talents) {
      const talent = talents[key];
      talentUpdates.push({
        updateOne: {
          filter: { _id: talent?._id },
          update: { $set: { score: Number(key) + 1 } },
        },
      });
    }

    // filter to ensure id doesn't exist as a top talent
    const existingTalentIds = talents?.map((talent) => talent._id?.toString());
    const filterdIds = ids?.filter(
      (id) => !existingTalentIds.includes(id.toString()),
    );

    const newTopTalents = await this.talentModel
      .find({ _id: { $in: filterdIds } })
      .select('score')
      .lean();

    // TODO: ensure it is not more than 10 by popping/ removing the first
    for (const key in newTopTalents) {
      const newTalent = newTopTalents[key];
      talentUpdates.push({
        updateOne: {
          filter: { _id: newTalent._id },
          update: { $set: { score: talentUpdates?.length + 1 } },
        },
      });
    }

    await this.talentModel.bulkWrite(talentUpdates);

    return talents;
  }
}
