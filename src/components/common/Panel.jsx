import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Panel = ({logo, siteName, handleClick}) => {
  return (
    <nav className="panel">
      <div className="panel__wrap container">
        <Link to="/" className="panel__logo"><img className="panel__logo-img" src={logo} alt={siteName}/></Link>

        <div className="toggle-nav" onClick={handleClick}>
          <span className="toggle-nav__decor"/>
        </div>
      </div>
    </nav>
  )
}

Panel.propTypes = {
  logo: PropTypes.string.isRequired,
  siteName: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Panel
