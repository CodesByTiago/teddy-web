import { useQuery } from 'react-query';
import apiClient from './apiClient';
import { GetClientsModel } from '@domain/models/Client';

const UserRepository = {
  getUsers: () => {
    const uri = '/clients';
    const data = apiClient.get<GetClientsModel[]>(uri).then((res) => res.data);
    return data;
  },
};

const useGetUsers = () =>
  useQuery<GetClientsModel[]>('users', UserRepository.getUsers);

export { useGetUsers };
