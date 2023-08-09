import axios from 'axios';
import queryString from 'query-string';
import { SolutionInterface, SolutionGetQueryInterface } from 'interfaces/solution';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSolutions = async (
  query?: SolutionGetQueryInterface,
): Promise<PaginatedInterface<SolutionInterface>> => {
  const response = await axios.get('/api/solutions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSolution = async (solution: SolutionInterface) => {
  const response = await axios.post('/api/solutions', solution);
  return response.data;
};

export const updateSolutionById = async (id: string, solution: SolutionInterface) => {
  const response = await axios.put(`/api/solutions/${id}`, solution);
  return response.data;
};

export const getSolutionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/solutions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSolutionById = async (id: string) => {
  const response = await axios.delete(`/api/solutions/${id}`);
  return response.data;
};
