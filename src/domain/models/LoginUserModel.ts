export interface LoginUserModel {
  user: {
    id: string;
    name: string;
    email: string;
    customers: [];
  };
  setUser: (user: {
    id: string;
    name: string;
    email: string;
    customers: [];
  }) => void;
}
