import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Get,
  Param,
  Query,
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
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

const createTalentFileInterceptor = [{ name: 'gallery', maxCount: 5 }];

const storageOption = diskStorage({
  destination: './uploads/gallery',
  filename: (_, file, callback) => {
    const ext = file?.mimetype.split('/')[1];
    const uniqueName = `${uuidv4()}.${ext}`;
    callback(null, uniqueName);
  },
});

@Controller('talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Public()
  @UseInterceptors(
    FileFieldsInterceptor(createTalentFileInterceptor, {
      storage: storageOption,
    }),
  )
  @Post()
  async create(
    @Body() createTalentDto: CreateTalentDto,
    @UploadedFiles() files: ICreateTalentMulterFiles,
  ) {
    const payload = {
      ...createTalentDto,
      gallery: files?.gallery,
    };

    return this.talentsService.create(payload);
  }

  @Public()
  @Get()
  async get(@Query() query?: IGetTalentQuery | undefined) {
    return this.talentsService.findAll({ query: query });
  }

  @Public()
  @Get('/:id')
  async getTalentById(
    @Param('id') id: string,
    @Query() query?: IGetTalentByIdQuery | undefined,
  ) {
    return this.talentsService.findById(id, { query: query });
  }
}
