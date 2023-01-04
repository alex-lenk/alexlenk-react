import React from 'react'
import icons from '../../assets/img/icons.svg'
import PropTypes from 'prop-types'

const SvgSprite = ({icon, className}) => {
  return (
    <svg className={className}>
      <use href={`${icons}#${icon}`}/>
    </svg>
  )
}

SvgSprite.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default SvgSprite
