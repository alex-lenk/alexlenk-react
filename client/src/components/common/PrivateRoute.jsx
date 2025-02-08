import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  isAllowed,
  redirectPath = '/login',
}) => {
  if (!isAllowed) {
    return <Navigate to={ redirectPath } replace/>;
  }
  return <Outlet/>;
};

PrivateRoute.propTypes = {
  isAllowed: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.object,
};

export default PrivateRoute;
