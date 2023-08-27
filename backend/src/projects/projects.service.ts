import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Model } from 'mongoose';
import { Project } from './schamas/projects.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    return this.projectModel.create(createProjectDto);
  }

  findOne(condition: { [key: string]: string }) {
    return this.projectModel.findOne(condition);
  }

  getProjectByUser(userId: string) {
    return this.projectModel.find({ user: userId });
  }

  deleteOne(conditon: { [key: string]: any }): any {
    return this.projectModel.deleteOne(conditon);
  }
  update(conditon: { [key: string]: any }, values: { [key: string]: any }) {
    return this.projectModel.updateOne(conditon, values);
  }
}
