import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import cls from './portfolio.module.scss';

const ProjectList = ({ projectsData }) => {
  return (
    <div className={ cls.portfolio }>
      { projectsData.map(project => (
        <section key={ project._id } className={ cls.card }>
          <div className={ cls.card_top }>
            <div className={ cls.card_media }>
              <img src={ `${ process.env.PUBLIC_URL }${ project.img }` } alt={ project.title }/>
            </div>

            <div className={ cls.card_content }>
              <div className={ cls.card_title }>{ project.title }</div>

              <div className={ cls.card_desc }>
                { project.introText }
              </div>
            </div>
          </div>

          <div className={ cls.card_stack + ' d-none' }>
            <h5 className="portfolio__stack-title">Стек технологий</h5>

            <ul className="stack__list list__unstyled">
              { project.stack.map(s => <li key={ s._id } className="stack__item stack__item--scss">
                <svg style={ { fill: '#ffffff' } } aria-hidden="true" viewBox="0 0 16 16" className="stack__item-icon">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                { s.name }
              </li>) }
            </ul>
          </div>

          <div className={ cls.card_footer }>
            <div className={ cls.card_btn + ` portfolio__card-btn btn__light btn js-ref ` }
                 data-ref={ project.link }
            >
              Посетить сайт
            </div>

            <Link to={ project.gitHub } className={ cls.card_github } rel="noreferrer nofollow" target="_blank">
              <svg className={ cls.card_icon }>
                <use href="../assets/img/icons.svg#github-ico"/>
              </svg>
            </Link>
          </div>
        </section>
      )) }
    </div>
  );
};

ProjectList.propTypes = {
  projectsData: PropTypes.array.isRequired,
};

export default ProjectList;
