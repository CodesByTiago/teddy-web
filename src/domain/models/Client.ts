// Get Clients Model
interface GetClientsModel {
  id: string;
  name: string;
  salary: string;
  companyValue: string;
  userId: string;
}

// Create Client Model
interface CreateClientModel {
  name: string;
  salary: string;
  companyValue: string;
}

// Update Client Model
interface UpdateClientModel {
  id: string;
  name: string;
  salary: string;
  companyValue: string;
  userId: string;
}

export type { GetClientsModel, CreateClientModel, UpdateClientModel };
