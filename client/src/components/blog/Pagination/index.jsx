import PropTypes from 'prop-types';
import Sprite from 'components/common/Sprite';
import cls from './pagination.module.scss';

const Index = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <nav className={ cls.pagination }>
      { currentPage !== 1 &&
        <div onClick={ () => onPageChange(currentPage - 1) } className={ cls.prev }>
          <Sprite id="arrow" className={ cls.icon }/>
        </div> }


      { pages.map(page =>
        <div
          key={ page }
          onClick={ () => onPageChange(page) }
          className={ `${ cls.item } ${ page === currentPage ? cls.current : '' }` }
        >
          { page }
        </div>,
      ) }

      { currentPage !== totalPages &&
        <div onClick={ () => onPageChange(currentPage + 1) } className={ cls.next }>
          <Sprite id="arrow" className={ `${ cls.icon } ${ cls.icon_next }` }/>
        </div> }
    </nav>
  );
};

Index.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Index;
