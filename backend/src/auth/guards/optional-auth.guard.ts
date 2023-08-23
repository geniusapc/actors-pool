// import { Injectable, ExecutionContext } from '@nestjs/common';
// import { IS_PUBLIC_KEY } from '../decorators/meta';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class PrivilegeInfoGuard extends JwtAuthGuard {
//   constructor(private reflector: Reflector) {
//     super();
//   }

//   canActivate(context: ExecutionContext): boolean {
//     const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     if (isPublic) {
//       return true;
//     }
//     const canActivate = super.canActivate(context);
//     if (!canActivate) {
//       return false;
//     }
//     return true;
//   }
// }
