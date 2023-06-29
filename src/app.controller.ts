import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TransformResponseInterceptor } from './response.interceptor';
import { TalentsService } from './talents/talents.service';
import { UsersService } from './users/users.service';

@Controller()
@UseInterceptors(TransformResponseInterceptor)
export class AppController {
  constructor(
    private readonly talentsService: TalentsService,
    private readonly usersService: UsersService,
  ) {}
  @Get('/stats')
  async getStats() {
    const nTalent = this.talentsService.countTalent();
    const nUsersWithProfile = this.talentsService.countUserWithTalentProfile();
    const nUsers = this.usersService.countUsers();
    const nAdmins = this.usersService.countAdmin();

    const result = await Promise.all([
      nTalent,
      nUsersWithProfile,
      nUsers,
      nAdmins,
    ]);

    const stats = {
      nTalents: result[0],
      nUsersWithProfile: result[1],
      nUsers: result[2],
      nAdmins: result[3],
    };

    return stats;
  }
}
