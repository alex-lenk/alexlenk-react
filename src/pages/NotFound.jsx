import React, {useEffect} from 'react'

const NotFound = () => {
  useEffect(()=> {
    document.title = 'Страница не найдена - 404 ошибка'
  }, [])
  return (
    <div className="page__content container">
      <section className="not-found">
        <div className="not-found__wrap">
          <div className="not-found__error">404</div>
          <h1 className="not-found__title">Страница не&nbsp;найдена</h1>
          <button className="btn__primary btn">На главную</button>
        </div>
      </section>
    </div>
  )
}

export default NotFound
