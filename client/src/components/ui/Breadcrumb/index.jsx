import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES_LINKS, PAGE_NAMES } from 'routes';
import cls from './breadcrumb.module.scss';

const Index = ({ title }) => {
  const location = useLocation();
  let pathNames = location.pathname.split('/').filter((x) => x);

  if (title) {
    pathNames[pathNames.length - 1] = title;
  }

  return (
    <ol className={ cls.list }>
      { pathNames.length > 0 && (
        <li className={ cls.item }>
          <Link className={ cls.link } to={ ROUTES_LINKS.HOME }>{ PAGE_NAMES.HOME }</Link>
        </li>
      ) }

      { pathNames.map((value, index) => {
        const isLast = index === pathNames.length - 1;
        const to = `/${ pathNames.slice(0, index + 1).join('/') }`;

        return isLast ? (
          <li key={ index } className={ cls.item }>
            { value }
          </li>
        ) : (
          <li key={ index } className={ cls.item }>
            <Link className={ cls.link } to={ to }>{ value }</Link>
          </li>
        );
      }) }
    </ol>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Index;
