import { GetClientsModel, UpdateClientModel } from '@domain/models/Client';
import ClientRepository from '@services/repostitories/ClientRepository';
import { QueryClient, useMutation, useQuery } from 'react-query';

// Get Clients ViewModel
const useGetClientsViewModel = () => {
  return useQuery<GetClientsModel[]>('clients', ClientRepository.getClients);
};

// Create Clients ViewModel
const useCreateClientViewModel = () => {
  return useMutation(ClientRepository.createClient);
};

// Update Client ViewModel
const useUpdateClientViewModel = (id: string) => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (clientData: UpdateClientModel) =>
      ClientRepository.updateClient(id, clientData),
    onSuccess: () => {
      queryClient.invalidateQueries(['clients']);
    },
  });
};

// Delete Cleint ViewModel
const useDeleteClientViewModel = () => {
  return useMutation(ClientRepository.deleteClient);
};

export {
  useGetClientsViewModel,
  useCreateClientViewModel,
  useUpdateClientViewModel,
  useDeleteClientViewModel,
};
