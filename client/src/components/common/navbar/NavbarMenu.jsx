import { Link } from 'react-router-dom';
import { PAGE_NAMES, ROUTES_LINKS } from 'routes';
import Sprite from 'components/common/Sprite';
import logo1 from 'assets/img/logo/logo-1.svg';

const NavbarMenu = () => {
  const currentYear = new Date().getFullYear();

  return (
    <aside className="navbar__menu">
      <Link to={ ROUTES_LINKS.HOME } className="navbar__menu-logo">
        <img src={ logo1 } alt="Александр Янк - Frontend developer"/>
      </Link>

      <nav>
        <Link to={ ROUTES_LINKS.PORTFOLIO } className="navbar__menu-link">{ PAGE_NAMES.PORTFOLIO }</Link>
        <Link to={ ROUTES_LINKS.SKILLS } className="navbar__menu-link">{ PAGE_NAMES.SKILLS }</Link>
        <Link to={ ROUTES_LINKS.EXPERIENCE } className="navbar__menu-link">{ PAGE_NAMES.EXPERIENCE }</Link>
        <Link to={ ROUTES_LINKS.CONTACTS } className="navbar__menu-link">{ PAGE_NAMES.CONTACTS }</Link>
        <Link to={ ROUTES_LINKS.BLOG } className="navbar__menu-link">{ PAGE_NAMES.BLOG }</Link>
      </nav>

      <div>
        <Link to={ ROUTES_LINKS.GITHUB } className="navbar__menu-link" rel="noreferrer nofollow" target="_blank">
          <Sprite id="github" className={ 'navbar__menu-github' }/>
        </Link>
      </div>

      <footer className="navbar__menu-footer">
        &copy;2015&mdash;{ currentYear }
        <div>Alex-yank.ru</div>
        Фронтенд-разработчик
      </footer>
    </aside>
  );
};

export default NavbarMenu;
