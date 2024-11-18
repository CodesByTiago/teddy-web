import { useMutation } from 'react-query';
import apiClient from '@services/apiClient';
import { useAuthStore } from '@store/authStore';
import { SignInModel } from '@domain/models/SignInModel';
import { useUserStore } from '@store/userStore';

interface LoginResponse {
  access_token: string;
  user: {
    id: string;
    name: string;
    email: string;
    customers: [];
  };
}

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);

  return useMutation(async (data: SignInModel) => {
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    const token = response.data.access_token;
    setToken(token);

    const { id, name, email, customers } = response.data.user;
    setUser({ id, name, email, customers });
  });
};
