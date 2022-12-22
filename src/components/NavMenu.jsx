import React from 'react'
import PropTypes from 'prop-types'

const NavMenu = ({logo, siteName}) => {
  const getYear = () => new Date().getFullYear()

  return (
    <aside className="nav-menu">
      <a href="/" className="nav-menu__logo">
        <img src={logo} alt={siteName}/>
      </a>

      <nav className="nav-menu__list">
        <a href="#" className="menu__item nav-menu__link">Портфолио</a>
        <a href="#" className="menu__item nav-menu__link">Навыки</a>
        <a href="#" className="menu__item nav-menu__link">Опыт</a>
        <a href="#" className="menu__item nav-menu__link">Контакты</a>
        <a href="#" className="menu__item nav-menu__link">Блог</a>
      </nav>

      <div>
        <a href="https://github.com/alex-lenk" className="nav-menu__link" rel="nofollow noreferrer" target="_blank">
          <svg className="nav-menu__github">
            <use href="@img/icons.svg#github"/>
          </svg>
        </a>
      </div>

      <footer className="nav-menu__footer">
        &copy;2015&mdash;{getYear()}
        <div>Alex-yank.ru</div>
        Фронтенд-разработчик
      </footer>
    </aside>
  )
}

NavMenu.propTypes = {
  logo: PropTypes.string.isRequired,
  siteName: PropTypes.string,
}

export default NavMenu
