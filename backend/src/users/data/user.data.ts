import { Roles } from '../enum';

export const defaultAdminUser = {
  email: 'admin@theactorspool.com',
  password: '12345678',
  role: Roles.Admin,
  firstname: 'actors-pool',
  lastname: 'actors-pool',
};
