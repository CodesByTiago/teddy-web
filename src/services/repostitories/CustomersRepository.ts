import {
  CreateCustomerModel,
  GetCustomersModel,
  UpdateCustomerModel,
} from '@domain/models/Customer';
import apiClient from '@services/apiClient';

const CustomersRepository = {
  // Get Clients Repository
  getCustomers: () => {
    const uri = '/customers';
    const data = apiClient
      .get<GetCustomersModel[]>(uri)
      .then((res) => res.data);
    return data;
  },

  // Create Client Repository
  createCustomer: (createCustomer: CreateCustomerModel) => {
    const uri = '/customers';
    const data = apiClient.post(uri, createCustomer).then((res) => res.data);
    return data;
  },

  // Update Client Repository
  updateCustomer: (id: string, clientData: UpdateCustomerModel) => {
    const uri = `/customers/${id}`;
    const data = apiClient.put(uri, clientData).then((res) => res.data);
    return data;
  },

  // Delete Client Repository
  deleteCustomer: (id: string) => {
    const uri = `/customers/${id}`;
    const data = apiClient.delete(uri).then((res) => res.data);
    return data;
  },
};

export default CustomersRepository;
