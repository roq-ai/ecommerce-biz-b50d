import { SolutionInterface } from 'interfaces/solution';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MerchantInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  solution?: SolutionInterface[];
  user?: UserInterface;
  _count?: {
    solution?: number;
  };
}

export interface MerchantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
