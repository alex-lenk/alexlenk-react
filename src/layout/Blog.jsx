import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import PostPage from '../components/page/PostPage'
import PostsListPage from '../components/page/PostsListPage'

const Blog = ({data}) => {
  const params = useParams()
  const {postId} = params

  useEffect(() => {
    document.title = data.browserTitle
  }, [])

  return (
    <div className="page__content container">
      {postId ? <PostPage id={postId}/> : <PostsListPage data={data}/>}
    </div>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog
