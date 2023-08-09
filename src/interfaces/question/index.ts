import { SolutionInterface } from 'interfaces/solution';
import { GetQueryInterface } from 'interfaces';

export interface QuestionInterface {
  id?: string;
  content: string;
  solution_id?: string;
  created_at?: any;
  updated_at?: any;

  solution?: SolutionInterface;
  _count?: {};
}

export interface QuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  solution_id?: string;
}
