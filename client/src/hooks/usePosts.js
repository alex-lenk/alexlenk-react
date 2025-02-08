import { useState } from 'react';
import { useGetPostsByCategoryQuery, useGetPostsDataQuery } from 'api/blogApiSlice';

const usePosts = (categorySlug = null) => {
  const [page, setPagePagination] = useState(1);

  const postsQuery = categorySlug ? useGetPostsByCategoryQuery : useGetPostsDataQuery;
  const postQueryOptions = categorySlug ? { slug: categorySlug, page } : { page };
  const {
    data: postsData,
    error: postsError,
    isLoading: postsIsLoading,
  } = postsQuery(postQueryOptions);

  return {
    postsData,
    postsError,
    postsIsLoading,
    setPagePagination
  };
};

export default usePosts;
