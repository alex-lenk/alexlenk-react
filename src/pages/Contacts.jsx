import React, {useEffect} from 'react'

const Contacts = () => {
  useEffect(()=> {
    document.title = 'Контакты'
  }, [])

  return (
    <div className="page__content container">
      <h1>Контакты</h1>

      <div className="contacts">
        <div className="contacts__text">
          Вы&#160;можете связаться со&#160;мной заполнив форму ниже, по&#160;телефону или через мессенджеры.
        </div>

        <form className="contacts__form" action="#">
          <div className="contacts__form-title text__large-extra">Связь со мной</div>

          <div className="form__group">
            <input className="form__control form__error" type="text" id="name" placeholder="Имя"/>
              <label className="form__label" htmlFor="name">Имя</label>
          </div>

          <div className="form__group">
            <input className="form__control form__filed" type="email" id="email" placeholder="E-mail"/>
              <label className="form__label" htmlFor="email">Email</label>
          </div>

          <div className="form__group">
            <textarea className="form__textarea" id="form-comment" placeholder="Опишите проект или задайте вопрос"/>
            <label className="form__label" htmlFor="form-comment">Комментарий</label>
          </div>

          <button className="btn__primary btn">Отправить</button>
        </form>

        <aside className="contacts__info">
          <div className="contacts__info-container">
            <div className="contacts__info-hot">
              <a className="contacts__info-phone" href="tel:+7 (968) 740 96-46">+7 (968) 740-96-46</a>

              <div className="social list__un-styled">
                <a href="#" className="social__item" target="_blank" rel="nofollow">
                  <svg className="social__icon">
                    <use href="@img/icons.svg#tg"> </use>
                  </svg>
                </a>
                <a href="#" className="social__item" target="_blank" rel="nofollow">
                  <svg className="social__icon">
                    <use href="@img/icons.svg#ws"> </use>
                  </svg>
                </a>
              </div>
            </div>

            <a href="mailto:Alex-yank@yandex.ru" className="contacts__info-text">Alex-yank@yandex.ru</a>
          </div>

          <span className="contacts__info-text">г. Москва, ул. Поклонная, 3, вход Е1</span>
        </aside>
      </div>
    </div>
  )
}

export default Contacts
