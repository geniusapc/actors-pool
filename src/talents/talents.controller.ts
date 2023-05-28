import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Get,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  Res,
  Req,
} from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { Public } from 'src/auth/decorators/meta';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { IGetTalentQuery, ICreateTalentMulterFiles } from './interfaces';
import { CreateTopTalentDto } from './dto/create-top-talent.dto';
import { ResponseDTO } from 'src/response.dto';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';

const createTalentFileInterceptor = [{ name: 'gallery', maxCount: 5 }];

@Controller({ path: '/talents', version: '1' })
export class TalentsController {
  constructor(
    private readonly talentsService: TalentsService,
    private readonly userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor(createTalentFileInterceptor, {
      storage: TalentsService.storageOption(),
    }),
  )
  @Post('my-profile')
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createTalentDto: CreateTalentDto,
    @UploadedFiles() files: ICreateTalentMulterFiles,
  ) {
    const userId = req?.user?._id;
    const payload = {
      ...createTalentDto,
      userId,
      gallery: files?.gallery,
    };

    const talent = await this.talentsService.create(payload);
    await this.userService.addProfile(userId, talent?._id?.toString());
    const message = 'Talent created successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, talent);
    return response.send(res);
  }

  //  Get my profile
  @Get('my-profile')
  async myProfile(@Req() req: Request, @Res() res: Response) {
    const talent = await this.talentsService.findOne({
      userId: req?.user?._id,
    });

    const message = 'Profile retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, talent);
    return response.send(res);
  }

  //  Get Talent
  @Public()
  @Get()
  async get(
    @Res() res: Response,
    @Query() query?: IGetTalentQuery | undefined,
  ) {
    const talents = await this.talentsService.findAll({ query: query });
    const message = 'Talents retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, talents);
    return response.send(res);
  }

  //  Get Top blazzers
  @Public()
  @Post()
  async addTopBlazzers() {
    return '';
  }

  @Public()
  @Get('top-talent')
  async getTopTalent(@Res() res: Response) {
    const topTalents = await this.talentsService.getTopTalents();
    const message = 'Top talents retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, topTalents);
    return response.send(res);
  }

  @Public()
  @Post('top-talent')
  async addTopTalent(@Body() createTopTalentDto: CreateTopTalentDto) {
    const topTalents = await this.talentsService.addTopTalents(
      createTopTalentDto?.talentIds,
    );

    return topTalents;
  }

  @Public()
  @Get('/:username')
  async getTalentById(
    @Res() res: Response,
    @Param('username') username: string,
  ) {
    const talent = await this.talentsService.findOne({ username: username });
    const message = 'Talent retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, talent);
    return response.send(res);
  }
}
