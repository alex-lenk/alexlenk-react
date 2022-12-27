import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import SvgSprite from '../components/ui/svgSprite'

const Contacts = ({dataGeneral, data}) => {
  useEffect(() => {
    document.title = data.browserTitle
  }, [])

  return (
    <div className="page__content container">
      <h1>{data.pageTitle}</h1>

      <div className="contacts">
        <div className="contacts__text" dangerouslySetInnerHTML={{__html: data.text}}/>

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
              <a className="contacts__info-phone" href={`tel:${data.phone}`}>{data.phone}</a>

              <div className="social list__un-styled">
                {Object.keys(dataGeneral).map(instance =>
                  <a key={instance} href={dataGeneral[instance].link} className="social__item"
                     rel="noopener nofollow">
                    <SvgSprite icon={dataGeneral[instance].icon} className='social__icon'/>
                  </a>
                )}
              </div>
            </div>

            <a href={`mailto:${data.email}`} className="contacts__info-text">{data.email}</a>
          </div>

          <span className="contacts__info-text">{data.address}</span>
        </aside>
      </div>
    </div>
  )
}

Contacts.propTypes = {
  dataGeneral: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default Contacts
