import { QuestionInterface } from 'interfaces/question';
import { MerchantInterface } from 'interfaces/merchant';
import { GetQueryInterface } from 'interfaces';

export interface SolutionInterface {
  id?: string;
  name: string;
  merchant_id?: string;
  created_at?: any;
  updated_at?: any;
  question?: QuestionInterface[];
  merchant?: MerchantInterface;
  _count?: {
    question?: number;
  };
}

export interface SolutionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  merchant_id?: string;
}
