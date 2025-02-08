import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES_LINKS } from 'routes';

const Post = ({ data }) => {
  const { slug, category, pageTitle, introtext, date, imageURL, tag } = data;

  return (
    <article className="blog__card">
      <Link to={ `${ ROUTES_LINKS.BLOG }/${ category.slug }/${ slug }` } className="blog__card-media">
        { imageURL && <img src={ `${ process.env.PUBLIC_URL }${ imageURL }` } alt={ pageTitle }/> }
      </Link>

      <div className="blog__card-content">
        <div className="blog__card-meta">
          <Link to={ `${ ROUTES_LINKS.BLOG }/${ category.slug }` } className="blog__card-category">{ category.browserTitle }</Link>

          <div className="blog__card-date">{ date }</div>
        </div>

        <h4 className="blog__card-title">
          <Link to={ `${ ROUTES_LINKS.BLOG }/${ category.slug }/${ slug }` } className="blog__card-link">
            { pageTitle }
          </Link>
        </h4>

        <div className="blog__card-text">
          { introtext }
        </div>

        <div className="blog__card-tags">
          { tag && tag.map(instance =>
            <span key={ instance._id } className="blog__card-tag"> #{ instance.name } </span>,
          ) }
        </div>
      </div>
    </article>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
