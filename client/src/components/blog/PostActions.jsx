import PropTypes from 'prop-types';

const PostActions = ({ handleEdit, handleDeletePost }) => {
  return (
    <>
      <div className="mr-auto">
        <button className="btn__success btn" onClick={ handleEdit }>
          Изменить пост
        </button>
      </div>
      <div>
        <button className="btn__secondary btn" onClick={ handleDeletePost }>
          Удалить пост
        </button>
      </div>
    </>
  );
};

PostActions.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostActions;
