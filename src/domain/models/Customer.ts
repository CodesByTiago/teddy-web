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
  userId: string;
}

// Update Client Model
interface UpdateCustomerModel {
  name: string;
  salary: string;
  companyValue: string;
}

export type { GetCustomersModel, CreateCustomerModel, UpdateCustomerModel };
