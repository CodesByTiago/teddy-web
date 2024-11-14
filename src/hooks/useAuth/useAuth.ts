import { useMutation } from 'react-query';
import apiClient from '@services/apiClient';
import { useAuthStore } from '@store/authStore';
import { SignInModel } from '@domain/models/SignInModel';

interface LoginResponse {
  access_token: string;
}

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation(async (data: SignInModel) => {
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    const token = response.data.access_token;
    setToken(token);
  });
};
