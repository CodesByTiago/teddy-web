export interface AuthProps {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}
