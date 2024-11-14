import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginUserModel } from '@domain/models/LoginUserModel';

export const useUserStore = create<LoginUserModel>()(
  persist(
    (set) => ({
      user: {
        id: '',
        name: '',
        email: '',
        customers: [],
      },
      setUser: (user) =>
        set(() => ({
          user,
        })),
    }),
    {
      name: 'user-storage',
    }
  )
);
