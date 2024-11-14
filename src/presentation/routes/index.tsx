import { Routes, Route } from 'react-router-dom';
import Login from '@pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import Customers from '@pages/Customers/Customers';
import NotFound from '@pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/clientes' element={<Customers />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
