import React from 'react'
import PropTypes from 'prop-types'
import BlogSide from '../../common/BlogSide'
import Breadcrumb from '../../common/Breadcrumb'
import transliterate from '../../utils/transliterate'
import {Link} from 'react-router-dom'

console.log(transliterate('ь'))

const PostsListPage = ({data}) => {
  return (
    <>
      <Breadcrumb/>

      <h1>{data.pageTitle}</h1>

      <div className="blog">
        <section className="blog__container">
          <div className="blog__list">
            {data.posts.map(instance =>
              <article key={instance.id} className="blog__card">
                <Link to={`/blog/post-${instance.id}`} className="blog__card-media">
                  {instance.img ? <img src={instance.img} alt={instance.title}/> : ''}
                </Link>

                <div className="blog__card-content">
                  <div className="blog__card-meta">
                    <a href="#" className="blog__card-category">{instance.category}</a>

                    <div className="blog__card-date">{instance.date}</div>
                  </div>

                  <h4 className="blog__card-title">
                    <Link to={`/blog/post-${instance.id}`} className="blog__card-link">
                      {instance.title}
                    </Link>
                  </h4>

                  <div className="blog__card-text">
                    {instance.introText}
                  </div>

                  <div className="blog__card-tags">
                    {instance.tag.map(item => <a key={item} href="#" className="blog__card-tag">#{item}</a>)}
                  </div>
                </div>
              </article>
            )}
          </div>

          <nav className="pagination">
            <a className="pagination__arrow pagination__arrow--prev" href="#">
              <svg className="pagination__arrow-icon">
                <use href="@img/icons.svg#arrow"/>
              </svg>
            </a>

            <span className="pagination__item pagination__item--current">1</span>
            <a href="#" className="pagination__item">2</a>
            <a href="#" className="pagination__item">3</a>
            <a href="#" className="pagination__item">4</a>
            <a href="#" className="pagination__item">5</a>
            <a href="#" className="pagination__item">6</a>

            <a className="pagination__arrow pagination__arrow--next" href="#">
              <svg className="pagination__arrow-icon pagination__arrow-icon--next">
                <use href="@img/icons.svg#arrow"/>
              </svg>
            </a>
          </nav>
        </section>

        <BlogSide/>
      </div>
    </>
  )
}

PostsListPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostsListPage
