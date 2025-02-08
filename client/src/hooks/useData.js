import { useGetCategoryDataQuery, useGetBlogDataQuery, useGetSinglePostDataQuery } from 'api/blogApiSlice';

const useData = (slug = null, isSinglePost = false) => {
  let blogQuery = slug ? useGetCategoryDataQuery : useGetBlogDataQuery;
  let blogQueryOptions = slug ? slug : {};

  if (isSinglePost) {
    blogQuery = useGetSinglePostDataQuery;
    blogQueryOptions = slug;
  }

  const {
    data,
    error,
    isLoading,
  } = blogQuery(blogQueryOptions);

  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
