import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo2 from 'assets/img/logo/logo-2.svg';
import { ROUTES_LINKS } from 'routes';

const NavbarPanel = ({ onToggle }) => {
  return (
    <nav className="navbar__panel">
      <div className="container navbar__panel-container">
        <Link to={ ROUTES_LINKS.HOME } className="navbar__panel-logo">
          <img className="navbar__panel-logo-img" src={ logo2 } alt=""/>
        </Link>

        <div className="navbar__toggle" onClick={ onToggle }>
          <span className="navbar__toggle-decor"></span>
        </div>
      </div>
    </nav>
  );
};

NavbarPanel.propTypes = {
  onToggle: PropTypes.func,
};

export default NavbarPanel;
