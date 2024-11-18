import { useMemo } from 'react';
import { jwtDecode } from 'jwt-decode';

const useTokenValidation = (token: string | null): boolean => {
  const isValidToken = useMemo(() => {
    if (!token) return false;

    try {
      const decoded = jwtDecode<{ exp?: number }>(token);

      if (decoded?.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
      }

      return false;
    } catch (error) {
      return false;
    }
  }, [token]);

  return isValidToken;
};

export default useTokenValidation;
