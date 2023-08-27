import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Talent } from './schemas/talents.schema';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateTalent,
  IGetTalentByIdQuery,
  IGetTalentQuery,
} from './interfaces';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as cloudinary from 'cloudinary';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import * as fs from 'fs';
import { UpdateTalentDto } from './dto/update-talent.dto';
import * as moment from 'moment';

const cloudinaryV2 = cloudinary.v2;

interface IFindAllQuery {
  query: IGetTalentQuery | undefined;
}

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent.name) private readonly talentModel: Model<Talent>,
  ) {
    cloudinaryV2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  private readonly logger = new Logger(TalentsService.name);
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

  async uploadImage(path: string, folder = ''): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      cloudinaryV2.uploader.upload(
        path,
        { public_id: uuidv4(), folder: folder },
        function (error: UploadApiErrorResponse, result: UploadApiResponse) {
          if (error) reject(error?.message);
          resolve(result);
        },
      );
    });
  }

  async countTalent(options?: { [key: string]: string }) {
    return this.talentModel.countDocuments(options);
  }
  async countUserWithTalentProfile() {
    return this.talentModel.countDocuments({ userId: { $exists: true } });
  }

  async uploadGallery(files: Array<Express.Multer.File> = []) {
    const urls = [];
    for (const file of files) {
      const { path } = file;
      try {
        const newPath = await this.uploadImage(path, 'gallery');
        urls.push({ photo: newPath?.secure_url });
        fs.unlinkSync(path);
      } catch (error) {
        this.logger.error(error);
        throw new UnprocessableEntityException(
          'We encoutered an issue uploading your gallery',
        );
      }
    }
    return urls;
  }

  private async generateUsername(name: string) {
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
    const username = await this.generateUsername(createTalentDto.firstname);

    const payload = {
      username: username,
      dob: createTalentDto.dob,
      about: createTalentDto.about,
      state: createTalentDto.state,
      movies: createTalentDto.movies,
      userId: createTalentDto.userId,
      gallery: createTalentDto.gallery,
      country: createTalentDto.country,
      lastname: createTalentDto.lastname,
      firstname: createTalentDto.firstname,
      phoneNumber: createTalentDto.phoneNumber,
      gender: createTalentDto.gender,
      languages: createTalentDto.languages,
      profession: createTalentDto.profession,
      activeSince: createTalentDto.activeSince,
      photo: createTalentDto?.gallery[0]?.photo,
      socialMedia: createTalentDto.socialMedia,
      status: createTalentDto.status,
      isProfileVisible: createTalentDto.isProfileVisible,
    };

    const talent = await this.talentModel.create(payload);
    return talent;
  }

  async userHasPermissionToUpdate(
    userId: string,
    talentId: string,
  ): Promise<void> {
    const hasPermissiion = await this.talentModel.findOne({
      _id: talentId,
      userId,
    });
    if (!hasPermissiion)
      throw new ForbiddenException(
        "You don't have permission to update this profile",
      );
  }

  async updateProfile(userId: string, updateProfileDto: UpdateTalentDto) {
    return this.talentModel.updateOne({ _id: userId }, updateProfileDto);
  }
  async bulkUpdateTalentProfile(
    ids: ObjectId[],
    field: { [key: string]: any },
  ) {
    return this.talentModel.updateMany({ _id: { $in: ids } }, field);
  }

  async bulkDeleteTalentProfile(ids: ObjectId[]): Promise<any> {
    return this.talentModel.deleteMany({ _id: { $in: ids } });
  }

  private static buildFindTalentFilter(query: Partial<IGetTalentQuery> = {}) {
    const name = query.q;
    const gender = query['q.gender'];
    const language = query['q.language'];
    const ageUpperLimit = query['q.age.lte'];
    const ageLowerLimit = query['q.age.gte'];
    const activeSince = query['q.activeSince'];
    const isProfileVisible = query['q.isProfileVisible'];
    const status = query['q.status'];

    const condition: FilterQuery<Talent> = {};

    if (isProfileVisible) condition.isProfileVisible = isProfileVisible;
    if (status) condition.status = status;

    if (name) {
      condition['$or'] = [
        { firstname: { $regex: new RegExp(name, 'i') } },
        { lastname: { $regex: new RegExp(name, 'i') } },
      ];
    }
    if (gender) condition.gender = gender;
    if (language) condition.languages = language;
    if (activeSince) condition.activeSince = { $gte: activeSince };

    if (ageUpperLimit) {
      condition.dob = { $lte: moment().subtract(ageUpperLimit, 'years') };
    }

    // include the upperAgeLimit if exist in order to get a range
    if (ageLowerLimit) {
      condition.dob = {
        ...condition.dob,
        $gte: moment().subtract(ageLowerLimit, 'years'),
      };
    }

    return condition;
  }

  private static getPaginateValues(query: Partial<IGetTalentQuery> = {}) {
    const defaultLimit = 25;
    const maxLimit = 100;
    const limit = Math.min(Number(query?.limit) || defaultLimit, maxLimit);
    const skip = Number(query?.skip) || 0;
    return { limit, skip };
  }

  async findAll({ query }: IFindAllQuery) {
    const select = query?.select?.split(',') || [];
    const condition = TalentsService.buildFindTalentFilter(query);
    const { limit, skip } = TalentsService.getPaginateValues(query);

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
      .select('rating firstname lastname username profession photo about')
      .sort({ rating: -1 })
      .lean();
  }
  async getTrailBlazzers() {
    return this.talentModel
      .find({ rating: { $exists: true } })
      .select(
        'rating firstname lastname username profession photo about movies dob activeSince ',
      )
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
