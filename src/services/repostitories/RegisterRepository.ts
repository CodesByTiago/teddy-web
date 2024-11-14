import { useMutation } from 'react-query';
import api from '@services/apiClient';
import { RegisterModel } from '@domain/models/RegisterModel';

const register = (registerModel: RegisterModel) => {
  const uri = `/auth/register`;
  const data = api.post(uri, registerModel);
  return data;
};

export const useRegister = () => {
  return useMutation(register);
};
