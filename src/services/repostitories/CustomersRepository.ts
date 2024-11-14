import {
  CreateCustomerModel,
  GetCustomersModel,
  UpdateCustomerModel,
} from '@domain/models/Customer';
import apiClient from '@services/apiClient';

const CustomersRepository = {
  // Get Clients Repository
  getCustomers: () => {
    const uri = '/clients';
    const data = apiClient
      .get<GetCustomersModel[]>(uri)
      .then((res) => res.data);
    return data;
  },

  // Create Client Repository
  createCustomer: () => {
    const uri = '/clients';
    const data = apiClient
      .post<CreateCustomerModel>(uri)
      .then((res) => res.data);
    return data;
  },

  // Update Client Repository
  updateCustomer: (id: string, clientData: UpdateCustomerModel) => {
    const uri = `/clients/${id}`;
    const data = apiClient.put(uri, clientData).then((res) => res.data);
    return data;
  },

  // Delete Client Repository
  deleteCustomer: (id: string) => {
    const uri = `/clients/${id}`;
    const data = apiClient.delete(uri).then((res) => res.data);
    return data;
  },
};

export default CustomersRepository;
