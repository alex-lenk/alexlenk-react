import React, {useEffect} from 'react'

const Blog = () => {
  useEffect(()=> {
    document.title = 'Блог'
  }, [])

  return (
    <div className="page__content container">
      html/breadcrumb.html

      <h1>Блог</h1>

      <div className="blog">
        <section className="blog__container">
          <div className="blog__list">
            <article className="blog__card">
              <a href="#" className="blog__card-media"> </a>

              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <a href="#" className="blog__card-category">Vue-js</a>

                  <div className="blog__card-date">02.01.2022</div>
                </div>

                <h4 className="blog__card-title">
                  <a className="blog__card-link" href="#">Что такое Vuex? И зачем нужен vuex?</a>
                </h4>

                <div className="blog__card-text">
                  Что такое Vuex — это паттерн управления состоянием приложения и одновременно библиотека для Vue.js.
                </div>

                <div className="blog__card-tags">
                  <a href="#" className="blog__card-tag">#Vuex</a>
                </div>
              </div>
            </article>

            <article className="blog__card">
              <a href="#" className="blog__card-media"> </a>

              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <a href="#" className="blog__card-category">JQuery</a>

                  <div className="blog__card-date">02.01.2022</div>
                </div>

                <h4 className="blog__card-title">
                  <a className="blog__card-link" href="#">Dropdown на jQuery - открытие и закрытие
                    списков</a>
                </h4>

                <div className="blog__card-text">
                  Открытие и закрытие списков на jQuery.
                </div>

                <a href="#" className="blog__card-tag">#Dropdown</a>
              </div>
            </article>

            <article className="blog__card">
              <a href="#" className="blog__card-media"> </a>

              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <a href="#" className="blog__card-category">JavaScript</a>

                  <div className="blog__card-date">02.01.2022</div>
                </div>

                <h4 className="blog__card-title">
                  <a className="blog__card-link" href="#">Аккордеон на чистом JavaScript</a>
                </h4>

                <div className="blog__card-text">
                  Нашел и доработал JS скрипт аккордеон. Он прост и понятен и написан на чистом JavaScript.
                </div>

                <a href="#" className="blog__card-tag">#Accordion</a>
              </div>
            </article>

            <article className="blog__card">
              <a href="#" className="blog__card-media"> </a>

              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <a href="#" className="blog__card-category">JavaScript</a>

                  <div className="blog__card-date">02.01.2022</div>
                </div>

                <h4 className="blog__card-title">
                  <a className="blog__card-link" href="#">js TAB - ТАБы на чистом JavaScript</a>
                </h4>

                <div className="blog__card-text">
                  Реализация TAB на чистом JavaScript без jQuery плангинов и прочих зависимостей.
                </div>

                <a href="#" className="blog__card-tag">#TAB</a>
              </div>
            </article>
          </div>

          <nav className="pagination">
            <a className="pagination__arrow pagination__arrow--prev" href="#">
              <svg className="pagination__arrow-icon">
                <use href="@img/icons.svg#arrow"> </use>
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
                <use href="@img/icons.svg#arrow"> </use>
              </svg>
            </a>
          </nav>
        </section>

        html/blog__side.html
      </div>
    </div>
  )
}

export default Blog
