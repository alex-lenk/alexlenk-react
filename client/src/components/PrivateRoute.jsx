import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES_LINKS } from 'routes';
// @todo delete this component
const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.status === 'failed') return <Navigate to={ ROUTES_LINKS.LOGIN }/>;

  return <Outlet/>;
};

export default PrivateRoute;
