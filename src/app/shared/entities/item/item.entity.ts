import { Rarity } from '../rarity/rarity.entity';
import { User } from '../user/user.entity';

export interface Item {
  id: string;
  name: string;
  description: string;
  rarity: Partial<Rarity>;
  user: Partial<User>;
}
