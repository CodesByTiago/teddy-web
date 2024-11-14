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
  selectedCustomers: CustomerDTO[];
  setUser: (user: UserDTO) => void;
  addCustomer: (customer: CustomerDTO) => void;
  deleteCustomer: (id: string) => void;
  clearSelected: () => void;
  deselectCustomer: (id: string) => void;
  addSelectCustomer: (id: string) => void;
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
      selectedCustomers: [],
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
      clearSelected: () => set({ selectedCustomers: [] }),
      deselectCustomer: (id) =>
        set((state) => ({
          selectedCustomers: state.selectedCustomers.filter((c) => c.id !== id),
        })),
      addSelectCustomer: (id) =>
        set((state) => {
          const customer = state.user.customers.find((c) => c.id === id);
          if (!customer) return state;

          return {
            selectedCustomers: [...state.selectedCustomers, customer],
          };
        }),
    }),
    {
      name: 'user-storage',
    }
  )
);
