import { useState, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

const useTokenValidation = (token: string | null) => {
  const [isValidToken, setIsValidToken] = useState<boolean>(false);

  const validateToken = useCallback(() => {
    if (!token) return false;

    try {
      const decoded = jwtDecode(token) as { exp?: number };

      if (decoded?.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
      }

      return false;
    } catch (error) {
      return false;
    }
  }, [token]);

  useEffect(() => {
    setIsValidToken(validateToken());
  }, [token, validateToken]);

  return isValidToken;
};

export default useTokenValidation;
