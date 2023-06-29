import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Res,
  Req,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
// import { UpdateProjectDto } from './dto/update-project.dto';
import { Request, Response } from 'express';
import { ResponseDTO } from 'src/response.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(
    @Body() createProjectDto: CreateProjectDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = req?.user?._id;
    const payload = { ...createProjectDto, user };
    const project = await this.projectsService.create(payload);

    const message = 'Project created successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, project);
    return response.send(res);
  }

  @Get()
  async projects(@Req() req: Request, @Res() res: Response) {
    const userId = req?.user?._id;
    const myProjects = await this.projectsService.getProjectByUser(userId);

    const message = 'Project retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, myProjects);
    return response.send(res);
  }

  @Get('/:id')
  async project(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?._id;
    const myProject = await this.projectsService.findOne({
      user: userId,
      _id: id,
    });

    const message = 'Project retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, myProject);
    return response.send(res);
  }

  // EDIT ROUTES
  @Patch('/:id')
  async editProject(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?._id;
    const myProject = await this.projectsService.update(
      {
        user: userId,
        _id: id,
      },
      { ...updateProjectDto },
    );

    const message = 'Project edited successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, myProject);
    return response.send(res);
  }

  // DELETE ROUTES
  @Delete('/:id')
  async deleteMyProject(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?._id;
    const isDeleted = await this.projectsService.deleteOne({
      user: userId,
      _id: id,
    });

    const message = 'Project retrieved successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, isDeleted);
    return response.send(res);
  }

  @Delete('/:id/talents')
  async clearProjectTalent(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?._id;
    const isDeleted = await this.projectsService.update(
      {
        user: userId,
        _id: id,
      },
      { talents: [] },
    );

    const message = 'Project talents deleted successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, isDeleted);
    return response.send(res);
  }

  @Delete('/:id/talents/:talentId')
  async deleteTalentFromProject(
    @Param('id') id: string,
    @Param('talentId') talentId: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req?.user?._id;
    const isDeleted = await this.projectsService.update(
      {
        user: userId,
        _id: id,
      },
      { $pull: { talents: talentId } },
    );

    const message = 'Project talent deleted successfully';
    const response = new ResponseDTO(HttpStatus.OK, message, isDeleted);
    return response.send(res);
  }
}
