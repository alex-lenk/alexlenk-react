import React, {useEffect} from 'react'

const Portfolio = () => {
  useEffect(()=> {
    document.title = 'Портфолио - Александр Янковой - фронтенд разработчик'
  }, [])

  return (
    <div className="page__content container">
      <h1>Портфолио</h1>

      <div className="portfolio">
        <section className="portfolio__card">
          <div className="portfolio__card-top">
            <div className="portfolio__card-media">
              <img src={require('../assets/img/company-logo/wineexpress.svg').default} alt=""/>
            </div>

            <div className="portfolio__card-content">
              <div className="portfolio__card-title">Wine Express</div>

              <div className="portfolio__card-desc">
                Интернет-витрина алкоголя, входит в холдинг одного из крупнейших винных импортеров Alianta Group.
              </div>
            </div>
          </div>

          <div className="portfolio__stack stack">
            <h5 className="portfolio__stack-title">Стек технологий</h5>

            <ul className="stack__progress list__un-styled">
              <li className="stack__progress-item stack__progress-scss" style={{width: '11.1%',backgroundColor: '#C6538C',}}> </li>
              <li className="stack__progress-item stack__progress-html" style={{width: '11.1%',backgroundColor: '#E94929',}}> </li>
              <li className="stack__progress-item stack__progress-css" style={{width: '11.1%',backgroundColor: '#C6538C',}}> </li>
              <li className="stack__progress-item stack__progress-js" style={{width: '11.1%',backgroundColor: '#F1E05A',}}> </li>
              <li className="stack__progress-item stack__progress-jsx" style={{width: '11.1%',backgroundColor: '#61dafb',}}> </li>
              <li className="stack__progress-item stack__progress-vue" style={{width: '11.1%',backgroundColor: '#41B883',}}> </li>
              <li className="stack__progress-item stack__progress-angular" style={{width: '11.1%',backgroundColor: '#1976d2',}}> </li>
              <li className="stack__progress-item stack__progress-node" style={{width: '11.1%',backgroundColor: '#64DE64',}}> </li>
              <li className="stack__progress-item stack__progress-php" style={{width: '11.1%',backgroundColor: '#4F5B93',}}> </li>
            </ul>

            <ul className="stack__list list__un-styled">
              <li className="stack__item stack__item--scss">
                <svg style={{fill: '#ffffff'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                SCSS 11.1%
              </li>
              <li className="stack__item stack__item--html">
                <svg style={{fill: '#ffffff'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                HTML 11.1%
              </li>
              <li className="stack__item stack__item--css">
                <svg style={{fill: '#C6538C'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                CSS 11.1%
              </li>
              <li className="stack__item stack__item--js">
                <svg style={{fill: '#F1E05A'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                JavaScript 11.1%
              </li>
              <li className="stack__item stack__item--jsx">
                <svg style={{fill: '#61dafb'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                JSX 11.1%
              </li>
              <li className="stack__item stack__item--vue">
                <svg style={{fill: '#41B883'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                Vue 11.1%
              </li>
              <li className="stack__item stack__item--angular">
                <svg style={{fill: '#1976d2'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                Angular 11.1%
              </li>
              <li className="stack__item stack__item--node">
                <svg style={{fill: '#64DE64'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                Node 11.1%
              </li>
              <li className="stack__item stack__item--php">
                <svg style={{fill: '#4F5B93'}} aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                PHP 11.1%
              </li>
            </ul>
          </div>

          <div className="portfolio__card-footer">
            <div className="portfolio__card-btn btn__secondary btn js-ref" data-ref="#">
              Посетить сайт
            </div>

            <a href="#" className="portfolio__card-github" rel="nofollow" target="_blank">
              <svg className="portfolio__card-icon">
                <use href="../assets/img/icons.svg#github-ico"/>
              </svg>
            </a>
          </div>
        </section>

        <section className="portfolio__card">
          <div className="portfolio__card-top">
            <div className="portfolio__card-media">
              <img src={require('../assets/img/company-logo/alianta.svg').default} alt='' />
            </div>

            <div className="portfolio__card-content">
              <div className="portfolio__card-title">Alianta Group</div>

              <div className="portfolio__card-desc">
                Alianta Group является одним из ведущих импортеров на алкогольном рынке России.
              </div>
            </div>
          </div>

          <div className="portfolio__card-stack">
            Стек технологий
          </div>

          <div className="portfolio__card-footer">
            <div className="portfolio__card-btn btn__secondary btn js-ref" data-ref="#">
              Посетить сайт
            </div>

            <a href="#" className="portfolio__card-github" rel="nofollow" target="_blank">
              <svg className="portfolio__card-icon">
                <use href="../assets/img/icons.svg#github-ico"/>
              </svg>
            </a>
          </div>
        </section>

        <section className="portfolio__card">
          <div className="portfolio__card-top">
            <div className="portfolio__card-media">
              <img src={require('../assets/img/company-logo/mi-shop.svg').default} alt=""/>
            </div>

            <div className="portfolio__card-content">
              <div className="portfolio__card-title">mi-shop</div>

              <div className="portfolio__card-desc">
                Интернет-магазин смартфонов Xiaomi и&nbsp;умных устройств для дома и&nbsp;не&nbsp;только
              </div>
            </div>
          </div>

          <div className="portfolio__card-stack">
            Стек технологий
          </div>

          <div className="portfolio__card-footer">
            <div className="portfolio__card-btn btn__secondary btn js-ref" data-ref="#">
              Посетить сайт
            </div>

            <a href="#" className="portfolio__card-github" rel="nofollow" target="_blank">
              <svg className="portfolio__card-icon">
                <use href="../assets/img/icons.svg#github-ico"/>
              </svg>
            </a>
          </div>
        </section>

        <section className="portfolio__card">
          <div className="portfolio__card-top">
            <div className="portfolio__card-media">
              <img src={require('../assets/img/company-logo/azro.svg').default} alt=""/>
            </div>

            <div className="portfolio__card-content">
              <div className="portfolio__card-title">Аzro.studio</div>

              <div className="portfolio__card-desc">
                Digital-агентство в Дубае. Направления: цифровая стратегия, маркетинг, дизайн и разработка.
              </div>
            </div>
          </div>

          <div className="portfolio__card-stack">
            Стек технологий
          </div>

          <div className="portfolio__card-footer">
            <div className="portfolio__card-btn btn__secondary btn js-ref" data-ref="#">
              Посетить сайт
            </div>

            <a href="#" className="portfolio__card-github" rel="nofollow" target="_blank">
              <svg className="portfolio__card-icon">
                <use href="../assets/img/icons.svg#github-ico"/>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
