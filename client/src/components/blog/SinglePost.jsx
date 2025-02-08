import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPost, updatePost, deletePost } from 'redux/slices/post';
import handleAxiosError from 'utils/handleAxiosError';
import { toast } from 'react-toastify';
import { EditContent, FormContent } from './BlogPostComponents';
import PostActions from './PostActions';
import { ROUTES_LINKS } from 'routes';

const SinglePost = ({ content, slug, id, isAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [updatePostCall, setUpdatePostCall] = useState({
    status: 'idle',
    error: null,
    result: null,
  });

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true);
    setEditedContent(content);
  };

  const handleDeletePost = useCallback(() => {
    deletePost(id)
      .then(({ data }) => {
        navigate(ROUTES_LINKS.BLOG);
        toast(data.message);
      })
      .catch((error) => {
        toast(error);
      });
  }, [id, navigate]);

  const handlePostChanges = useCallback((e) => {
    e.preventDefault();
    updatePost(id, editedContent)
      .then((result) => {
        setUpdatePostCall({ status: 'success', result: result.data, error: null });
        setEditMode(false);
        dispatch(getPost(slug));
        toast(result.data.message);
      })
      .catch((error) => {
        const err = handleAxiosError(error);
        if (err === 'return') return;
        setUpdatePostCall({ status: 'failed', result: null, error: err });
      });
  }, [dispatch, editedContent, id, slug]);

  return (
    <div>
      <div className="d-flex mb-4">
        { isAuthenticated && !editMode &&
          <PostActions handleDeletePost={ handleDeletePost } handleEdit={ handleEdit }/> }
      </div>

      { editMode && (
        <>
          <FormContent onSubmit={ handlePostChanges }>
            { updatePostCall.status === 'failed' && (
              <div>{ updatePostCall.error }</div>
            ) }
            <EditContent value={ editedContent } onChange={ handleContentChange }/>
            <button>Отправить изменения</button>
          </FormContent>
        </>
      ) }
      <div dangerouslySetInnerHTML={ { __html: content } }/>
    </div>
  );
};

SinglePost.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  slug: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

export default SinglePost;
