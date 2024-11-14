import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthProps } from '@domain/interfaces/AuthProps';

export const useAuthStore = create<AuthProps>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      setToken: (token) =>
        set(() => ({
          token,
          isAuthenticated: true,
        })),
      clearToken: () =>
        set(() => ({
          token: null,
          isAuthenticated: false,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);
