import { User } from '../user/user.entity';

export interface Item {
  id: string;
  name: string;
  description: string;
  user: Partial<User>;
}
