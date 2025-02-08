import { Link } from 'react-router-dom';
import { useGetAllCategoryDataQuery } from 'api/blogApiSlice';
import { ROUTES_LINKS } from 'routes';
import usePosts from 'hooks/usePosts';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';

const BlogSide = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetAllCategoryDataQuery();

  const {
    postsData,
    postsError,
    postsIsLoading,
  } = usePosts();

  if (isLoading || postsIsLoading) return <Loader/>;
  if (error || postsError) return <ErrorPage error={ [error.message, postsError.message] }/>;

  return (
    <aside className="blog__side">
      <div className="blog__boxed">
        <h4 className="blog__boxed-title">Рубрики</h4>

        <ul className="blog__boxed-list list__unstyled">
          { data.map(instance =>
            <li key={ instance._id } className="blog__boxed-item">
              <Link to={ `${ ROUTES_LINKS.BLOG }/${ instance.slug }` } className="blog__boxed-link">
                { instance.pageTitle }
              </Link>
            </li>,
          ) }
        </ul>
      </div>

      <div className="blog__side-box">
        <h5 className="blog__side-title">Интересные записи</h5>

        <div className="blog__tags">
          { postsData.posts.map(instance =>
            <Link
              key={ instance._id }
              to={ `${ ROUTES_LINKS.BLOG }/${ instance.category.slug }/${ instance.slug }` }
              className="blog__tags-item"
            >{ instance.pageTitle }</Link>,
          ) }
        </div>
      </div>
    </aside>
  );
};

export default BlogSide;
