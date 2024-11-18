import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthProps } from '@domain/interfaces/AuthProps';

export const useAuthStore = create<AuthProps>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) =>
        set(() => ({
          token,
        })),
      clearToken: () =>
        set(() => ({
          token: null,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);
