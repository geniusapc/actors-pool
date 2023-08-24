import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Roles } from 'src/users/enum';
import { TalentStatus } from '../enum';

@Injectable()
export class FilterGetTalentResInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const userRole = context.switchToHttp().getRequest().user.role;

    return next.handle().pipe(
      map((data) => {
        const newData = data;
        if (userRole !== Roles.Admin) {
          if (
            !newData?.isProfileVisible ||
            newData.status !== TalentStatus.APPROVED
          ) {
            return null;
          }
        }
        return newData;
      }),
    );
  }
}
