import { User } from '../user/user.entity';

export interface Rarity {
  id: string;
  name: string;
  color: string;
  user: Partial<User>;
}
