// Get Clients Model
interface GetCustomersModel {
  id: string;
  name: string;
  salary: string;
  companyValue: string;
  userId: string;
}

// Create Client Model
interface CreateCustomerModel {
  name: string;
  salary: string;
  companyValue: string;
}

// Update Client Model
interface UpdateCustomerModel {
  id: string;
  name: string;
  salary: string;
  companyValue: string;
  userId: string;
}

export type { GetCustomersModel, CreateCustomerModel, UpdateCustomerModel };
