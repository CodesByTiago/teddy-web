import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserDTO {
  id: string;
  name: string;
  email: string;
  customers: CustomerDTO[];
}

interface CustomerDTO {
  id: string;
  name: string;
  salary: string;
  companyValue: string;
  userId: string;
}

export interface StoreModel {
  user: UserDTO;
  setUser: (user: UserDTO) => void;
  addCustomer: (customer: CustomerDTO) => void;
  deleteCustomer: (id: string) => void;
}

export const useUserStore = create<StoreModel>()(
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
      addCustomer: (customer) =>
        set((state) => ({
          user: {
            ...state.user,
            customers: [...state.user.customers, customer],
          },
        })),
      deleteCustomer: (id) =>
        set((state) => ({
          user: {
            ...state.user,
            customers: state.user?.customers.filter(
              (customer) => customer.id !== id
            ),
          },
        })),
    }),
    {
      name: 'user-storage',
    }
  )
);
