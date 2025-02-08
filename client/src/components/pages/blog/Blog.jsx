import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import usePosts from 'hooks/usePosts';
import useData from 'hooks/useData';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';
import Breadcrumb from 'components/ui/Breadcrumb';
import BlogSide from 'components/blog/BlogSide';
import PostsList from 'components/blog/PostsList';
import SinglePost from 'components/blog/SinglePost';
import SetAuthToken from 'utils/SetAuthToken';
import { getUserByToken } from 'redux/slices/auth';

const Blog = () => {
  const { categorySlug, postSlug } = useParams();
  const useDataArguments = postSlug ? [postSlug, true] : [categorySlug];
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    SetAuthToken();
  }, [auth]);

  useEffect(() => {
    dispatch(getUserByToken());
  }, []);

  const {
    postsData,
    postsError,
    postsIsLoading,
    setPagePagination,
  } = usePosts(categorySlug);

  const {
    data,
    error,
    isLoading,
  } = useData(...useDataArguments);

  if (isLoading || postsIsLoading) return <Loader/>;
  if (error || postsError) return <ErrorPage error={ [error.message, postsError.message] }/>;

  const { browserTitle, pageTitle, content } = data;

  return (
    <>
      <Helmet>
        <title>{ browserTitle }</title>
      </Helmet>
      <Breadcrumb title={ browserTitle }/>

      <div className="blog">
        <section className="blog__container">
          <h1 className="blog__title">{ pageTitle }</h1>

          { postSlug
            ?
            <SinglePost
              content={ content }
              id={ data._id }
              slug={ data.slug }
              isAuthenticated={ auth.status === 'success' }
            />
            :
            <PostsList
              content={ content }
              postsData={ postsData }
              setPagePagination={ setPagePagination }
            />
          }
        </section>

        <BlogSide/>
      </div>
    </>
  );
};

export default Blog;
