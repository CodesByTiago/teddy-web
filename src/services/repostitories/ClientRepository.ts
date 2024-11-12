import {
  CreateClientModel,
  GetClientsModel,
  UpdateClientModel,
} from '@domain/models/Client';
import apiClient from '@services/apiClient';

const ClientRepository = {
  // Get Clients Repository
  getClients: () => {
    const uri = '/clients';
    const data = apiClient.get<GetClientsModel[]>(uri).then((res) => res.data);
    return data;
  },

  // Create Client Repository
  createClient: () => {
    const uri = '/clients';
    const data = apiClient.post<CreateClientModel>(uri).then((res) => res.data);
    return data;
  },

  // Update Client Repository
  updateClient: (id: string, clientData: UpdateClientModel) => {
    const uri = `/clients/${id}`;
    const data = apiClient.put(uri, clientData).then((res) => res.data);
    return data;
  },

  // Delete Client Repository
  deleteClient: (id: string) => {
    const uri = `/clients/${id}`;
    const data = apiClient.delete(uri).then((res) => res.data);
    return data;
  },
};

export default ClientRepository;
