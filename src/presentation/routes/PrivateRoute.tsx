import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';
import useTokenValidation from '@hooks/shared/useTokenValidation/useTokenValidation';

const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const { token } = useAuthStore();
  const isValidToken = useTokenValidation(token);

  if (!isValidToken) {
    return <Navigate to='/login' replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
