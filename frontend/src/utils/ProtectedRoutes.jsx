import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { appRoutes } from './routes';

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={appRoutes.login} />;
};

export default ProtectedRoutes;
