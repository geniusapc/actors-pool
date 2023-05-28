import { BadRequestException, Injectable } from '@nestjs/common';
import { Talent } from './schemas/talents.schema';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  ICreateTalentMulterFiles,
  IGetTalentByIdQuery,
  IGetTalentQuery,
} from './interfaces';
import { CreateTalentDto } from './dto/create-talent.dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

type CreateTalent = CreateTalentDto &
  ICreateTalentMulterFiles & { userId: string };

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent.name) private readonly talentModel: Model<Talent>,
  ) {}

  static storageOption() {
    return diskStorage({
      destination: './uploads/gallery',
      filename: (_, file, callback) => {
        const ext = file?.mimetype.split('/')[1];
        const uniqueName = `${uuidv4()}.${ext}`;
        callback(null, uniqueName);
      },
    });
  }

  static generateRandomUsername(name: string) {
    const randomDigit = Math.floor(Math.random() * 10000).toString();
    return name?.toLowerCase() + randomDigit;
  }

  async generateUsername(name: string) {
    let username = name;
    let trialCount = 0;
    let usernameExits: number = await this.talentModel.countDocuments({
      username: username,
    });

    while (usernameExits) {
      trialCount++;
      if (trialCount > 100)
        throw new BadRequestException('Error generating username');
      username = TalentsService.generateRandomUsername(name);
      usernameExits = await this.talentModel.countDocuments({
        username: username,
      });
    }
    return username;
  }

  async create(createTalentDto: CreateTalent) {
    const gallery = createTalentDto?.gallery?.map((e) => ({
      photo: `/gallery/${e.filename}`,
    }));

    const username = await this.generateUsername(createTalentDto.firstname);

    const payload = {
      firstname: createTalentDto.firstname,
      lastname: createTalentDto.lastname,
      username: username,
      userId: createTalentDto.userId,
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
    let condition = {};
    const defaultLimit = 25;
    const maxLimit = 100;
    const limit = Math.min(Number(query?.limit) || defaultLimit, maxLimit);
    const skip = Number(query?.skip) || 0;
    const select = query?.select?.split(',') || [];

    if (query?.q)
      condition = { firstname: { $regex: new RegExp(query?.q, 'i') } };

    const queryBuilder = this.talentModel
      .find()
      .where(condition)
      .limit(limit)
      .skip(skip)
      .select(select);

    const countBuilder = this.talentModel
      .find()
      .where(condition)
      .countDocuments();

    return Promise.all([queryBuilder.exec(), countBuilder.exec()])
      .then(([results, totalCount]) => {
        return {
          skip,
          limit,
          count: results?.length,
          totalCount: totalCount,
          talent: results,
        };
      })
      .catch(() => {
        return {};
      });
  }

  async findOne(condition: { [key: string]: any }) {
    return this.talentModel.findOne(condition);
  }

  async findById(id: string, options?: IGetTalentByIdQuery) {
    const queryBuilder = this.talentModel.findById(id);

    // filter/select
    if (options?.select) queryBuilder.select(options?.select.split(','));
    return queryBuilder.exec();
  }

  async getTopTalents() {
    return this.talentModel
      .find({ rating: { $exists: true } })
      .select('rating firstname lastname profession photo about')
      .sort({ rating: -1 })
      .lean();
  }

  async addTopTalents(ids: ObjectId[]) {
    const talentUpdates = [];
    const talents = await this.talentModel
      .find({ rating: { $exists: true } })
      .select('rating')
      .lean();

    for (const key in talents) {
      const talent = talents[key];
      talentUpdates.push({
        updateOne: {
          filter: { _id: talent?._id },
          update: { $set: { rating: Number(key) + 1 } },
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
      .select('rating')
      .lean();

    // TODO: ensure it is not more than 10 by poping/ removing the first
    for (const key in newTopTalents) {
      const newTalent = newTopTalents[key];
      talentUpdates.push({
        updateOne: {
          filter: { _id: newTalent._id },
          update: { $set: { rating: talentUpdates?.length + 1 } },
        },
      });
    }

    await this.talentModel.bulkWrite(talentUpdates);

    return talents;
  }
}
