import React from 'react'

const BlogSide = () => {
  return (
    <aside className="blog__side">
      <div className="blog__boxed">
        <h4 className="blog__boxed-title">Рубрики</h4>

        <ul className="blog__boxed-list list__un-styled">
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">HTML</a>
          </li>
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">CSS</a>
          </li>
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">JavaScript</a>
          </li>
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">Vue.js</a>
          </li>
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">React.js</a>
          </li>
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">Node.js</a>
          </li>
          <li className="blog__boxed-item">
            <a href="#" className="blog__boxed-link">JQuery</a>
          </li>
        </ul>
      </div>

      <div className="blog__side-box">
        <h5 className="blog__side-title">Популярные темы</h5>

        <div className="blog__tags">
          <a href="#" className="blog__tags-item">#Dropdown</a>
          <a href="#" className="blog__tags-item">#Accordion</a>
          <a href="#" className="blog__tags-item"> #TAB</a>
          <a href="#" className="blog__tags-item">#Vuex</a>
          <a href="#" className="blog__tags-item">#Button</a>
          <a href="#" className="blog__tags-item">#Input</a>
          <a href="#" className="blog__tags-item">#Breadcrumbs</a>
          <a href="#" className="blog__tags-item">#Multiselect</a>
          <a href="#" className="blog__tags-item">#Search</a>
        </div>
      </div>

      <div className="blog__side-box">
        <h5 className="blog__side-title">Популярные статьи</h5>

        <ul className="blog__articles list__un-styled">
          <li className="blog__articles-item">
            <a href="#" className="blog__articles-link">Что такое Vuex? И зачем нужен vuex?</a>
          </li>

          <li className="blog__articles-item">
            <a href="#" className="blog__articles-link">Dropdown на jQuery - открытие и закрытие списков</a>
          </li>

          <li className="blog__articles-item">
            <a href="#" className="blog__articles-link">Аккордеон на чистом JavaScript</a>
          </li>

          <li className="blog__articles-item">
            <a href="#" className="blog__articles-link">js TAB - ТАБы на чистом JavaScript</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default BlogSide
