import PropTypes from 'prop-types';
import sprite from 'assets/img/icons.svg';

const Sprite = ({ id, className }) => {
  return (
    <svg className={ className }>
      <use href={ `${ sprite }#${ id }` }/>
    </svg>
  );
};

Sprite.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Sprite;
