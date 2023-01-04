import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({logo, siteName}) => {
  return (
    <nav className="panel">
      <div className="panel__wrap container">
        <a href="/" className="panel__logo">
          <img className="panel__logo-img" src={logo} alt={siteName}/>
        </a>

        <div className="toggle-nav js-toggle-nav">
          <span className="toggle-nav__decor"/>
        </div>
      </div>
    </nav>
  )
}

Panel.propTypes = {
  logo: PropTypes.string.isRequired,
  siteName: PropTypes.string,
}

export default Panel
