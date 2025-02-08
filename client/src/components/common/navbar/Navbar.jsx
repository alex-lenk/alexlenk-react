import { useState } from 'react';
import PropTypes from 'prop-types';
import NavbarPanel from './NavbarPanel';
import NavbarMenu from './NavbarMenu';
import AuthPanel from './AuthPanel';

const Navbar = ({ status }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={ `navbar${ isActive ? ' navbar__open' : '' }` }>
      <NavbarPanel onToggle={ handleToggle }/>
      <NavbarMenu/>
      { status === 'success' && <AuthPanel/> }
    </div>
  );
};

Navbar.propTypes = {
  status: PropTypes.string,
};

export default Navbar;
