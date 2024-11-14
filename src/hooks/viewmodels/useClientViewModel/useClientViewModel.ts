import { UpdateClientModel } from '@domain/models/Customer';
import CustomersRepository from '@services/repostitories/CustomersRepository';
import { QueryClient, useMutation } from 'react-query';

// Create Clients ViewModel
const useCreateCustomerViewModel = () => {
  return useMutation(CustomersRepository.createCustomer);
};

// Update Client ViewModel
const useUpdateCustomerViewModel = (id: string) => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (clientData: UpdateClientModel) =>
      CustomersRepository.updateCustomer(id, clientData),
    onSuccess: () => {
      queryClient.invalidateQueries(['clients']);
    },
  });
};

// Delete Cleint ViewModel
const useDeleteCustomerViewModel = () => {
  return useMutation(CustomersRepository.deleteCustomer);
};

export {
  useCreateCustomerViewModel,
  useUpdateCustomerViewModel,
  useDeleteCustomerViewModel,
};
