import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_OPTIONAL_AUTH_KEY, IS_PUBLIC_KEY } from '../decorators/meta';
import { Roles } from 'src/users/enum';

const GuestUser = {
  _id: '-1',
  firstname: 'Guest',
  email: 'guest@example.com',
  role: Roles.Guest,
};

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const isOptionalAuthKey = this.reflector.getAllAndOverride<boolean>(
      IS_OPTIONAL_AUTH_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!user && isOptionalAuthKey) return GuestUser;

    if (err || !user) throw err || new UnauthorizedException();

    return user;
  }
}
