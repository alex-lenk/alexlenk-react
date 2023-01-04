import React from 'react'

const Breadcrumb = () => {
  return (
    <ol className="breadcrumb list__un-styled">
      <li className="breadcrumb__item">
        <a className="breadcrumb__link" href="/">Главная</a>
      </li>
      <li className="breadcrumb__item">breadcrumbs</li>
    </ol>
  )
}

export default Breadcrumb
