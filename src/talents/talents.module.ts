import { Module } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { TalentsController } from './talents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Talent, TalentSchema } from './schemas/talents.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Talent.name, schema: TalentSchema }]),
  ],
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentsModule {}
