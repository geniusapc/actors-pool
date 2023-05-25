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
} from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { Public } from 'src/auth/decorators/meta';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  IGetTalentQuery,
  IGetTalentByIdQuery,
  ICreateTalentMulterFiles,
} from './interfaces';
import { CreateTopTalentDto } from './dto/create-top-talent.dto';
import { ResponseDTO } from 'src/response.dto';
import { Response } from 'express';

const createTalentFileInterceptor = [{ name: 'gallery', maxCount: 5 }];

@Controller({ path: '/talents', version: '1' })
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor(createTalentFileInterceptor, {
      storage: TalentsService.storageOption(),
    }),
  )
  @Post()
  async create(
    @Res() res: Response,
    @Body() createTalentDto: CreateTalentDto,
    @UploadedFiles() files: ICreateTalentMulterFiles,
  ) {
    const payload = {
      ...createTalentDto,
      gallery: files?.gallery,
    };

    const talent = await this.talentsService.create(payload);
    const message = 'Talent created successfully';
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

  // NOTE:  params remains below

  @Public()
  @Get('/:id')
  async getTalentById(
    @Res() res: Response,
    @Param('id') id: string,
    @Query() options?: IGetTalentByIdQuery | undefined,
  ) {
    const talent = await this.talentsService.findById(id, options);

    const message = 'Talent retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, talent);
    return response.send(res);
  }
}
