export interface LoginResponseModel {
  id: string;
  name: string;
  email: string;
  customers: {
    id: string;
    name: string;
    salary: number;
    companyValue: number;
  }[];
}
