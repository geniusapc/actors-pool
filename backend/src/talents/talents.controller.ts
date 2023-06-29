import {
  Controller,
  Post,
  Patch,
  Body,
  UseInterceptors,
  UploadedFiles,
  Get,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { Public } from 'src/auth/decorators/meta';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  IGetTalentQuery,
  ICreateTalentMulterFiles,
  CreateTalent,
} from './interfaces';
import { CreateTopTalentDto } from './dto/create-top-talent.dto';
import { Request } from 'express';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { TransformResponseInterceptor } from 'src/response.interceptor';
import { Roles } from 'src/users/enum';

const createTalentFileInterceptor = [{ name: 'gallery', maxCount: 5 }];

@Controller({ path: '/talents', version: '1' })
@UseInterceptors(TransformResponseInterceptor)
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  // _________________________________________ Add Talent Profile _____________________________________________
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor(createTalentFileInterceptor, {
      storage: TalentsService.storageOption(),
    }),
  )
  @Post('')
  async createPoject(
    @Req() req: Request,
    @Body() createTalentDto: CreateTalentDto,
    @UploadedFiles() files: ICreateTalentMulterFiles,
  ) {
    //
    const urls = await this.talentsService.uploadGallery(files.gallery);

    const payload: CreateTalent = {
      ...createTalentDto,
      gallery: urls,
    };
    if (req.user?.role !== Roles.Admin) payload.userId = req?.user?._id;

    return this.talentsService.create(payload);
  }

  @Post('my-profile')
  async create(
    @Req() req: Request,
    @Body() createTalentDto: CreateTalentDto,
    @UploadedFiles() files: ICreateTalentMulterFiles,
  ) {
    const urls = await this.talentsService.uploadGallery(files.gallery);
    const userId = req?.user?._id;
    const payload = {
      ...createTalentDto,
      userId,
      gallery: urls,
    };

    return this.talentsService.create(payload);
  }

  // __________________________________________ Get Talent Profile _____________________________________________
  @Public()
  @Get()
  async get(@Query() query?: IGetTalentQuery | undefined) {
    return this.talentsService.findAll({ query: query });
  }

  @Get('my-profile')
  async myProfile(@Req() req: Request) {
    return this.talentsService.findOne({
      userId: req?.user?._id,
    });
  }

  // _________________________________ Edit Talent Profile _____________________________________________
  @UseInterceptors(
    FileFieldsInterceptor(createTalentFileInterceptor, {
      storage: TalentsService.storageOption(),
    }),
  )
  @Patch(':id')
  async editTalentProfile(
    @Req() req: Request,
    @Param('id') talentId: string,
    @Body() updateTalentDTO: UpdateTalentDto,
  ) {
    const userId = req?.user?._id;
    await this.talentsService.userHasPermissionToUpdate(userId, talentId);
    await this.talentsService.updateProfile(talentId, updateTalentDTO);
    return null;
  }

  // ________________________________________________ Blazzers _____________________________________________
  @Public()
  @Get('blazzers')
  async getBlazzers() {
    return await this.talentsService.getTrailBlazzers();
  }

  // @Post('top-blazzers')
  // async addTopBlazzers(@Body() createTopTalentDto: CreateTopTalentDto) {
  //   const topTalents = await this.talentsService.addBlazzers(
  //     createTopTalentDto?.talentIds,
  //   );

  //   return topTalents;
  // }

  // _________________________________________ Top Talents _____________________________________________

  @Public()
  @Post('top-talents')
  async addTopTalent(@Body() createTopTalentDto: CreateTopTalentDto) {
    const topTalents = await this.talentsService.addTopTalents(
      createTopTalentDto?.talentIds,
    );

    return topTalents;
  }

  @Public()
  @Get('top-talents')
  async getTopTalent() {
    return await this.talentsService.getTopTalents();
  }

  // _________________________________________________________Get user by username _____________________________________________
  @Public()
  @Get('/:username')
  async getTalentByUsername(@Param('username') username: string) {
    return this.talentsService.findOne({ username: username });
  }
}