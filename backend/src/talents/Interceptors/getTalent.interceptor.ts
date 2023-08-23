import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from 'src/users/enum';

@Injectable()
export class TransformTalentQueryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const userRole = context.switchToHttp().getRequest().user.role;

    if (userRole !== Roles.Admin) {
      context.switchToHttp().getRequest().query['q.isProfileVisible'] = true;
    }

    return next.handle();
  }
}
