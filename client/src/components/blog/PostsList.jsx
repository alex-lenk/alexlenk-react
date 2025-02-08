import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import Pagination from './Pagination'

const PostsList = ({ content, postsData, setPagePagination }) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage) => {
    setPage(newPage);
    setPagePagination(newPage);
  };

  return (
    <>
      <div className="blog__list">
        { !postsData?.posts?.length
          ? <div>No posts found.</div>
          : postsData.posts.map(instance => <Post key={ instance._id } data={ instance }/>)
        }
      </div>

      <Pagination
        totalPages={ postsData?.totalPages }
        currentPage={ page }
        onPageChange={ handlePageChange }
      />

      { content &&
        <div className="blog__content" dangerouslySetInnerHTML={ { __html: content } }/>
      }
    </>
  )
}

PostsList.propTypes = {
  content: PropTypes.string,
  postsData: PropTypes.object,
  setPagePagination: PropTypes.func,
};

export default PostsList
