import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from 'src/users/enum';
import { TalentStatus } from '../enum';

@Injectable()
export class TransformTalentsQueryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const userRole = context.switchToHttp().getRequest().user.role;

    if (userRole !== Roles.Admin) {
      context.switchToHttp().getRequest().query['q.isProfileVisible'] = true;
      context.switchToHttp().getRequest().query['q.status'] =
        TalentStatus.APPROVED;
    }

    return next.handle();
  }
}
