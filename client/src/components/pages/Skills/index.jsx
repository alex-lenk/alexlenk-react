import { Helmet } from 'react-helmet-async';
import { useGetSkillsDataQuery } from 'api/skillsApiSlice';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';
import cls from './skills.module.scss';

const Skills = () => {
  const { data, error, isLoading } = useGetSkillsDataQuery();

  if (isLoading) return <Loader/>;
  if (error) return <ErrorPage error={ [error.message] }/>;

  return (
    <>
      <Helmet>
        <title>{ data.browserTitle }</title>
      </Helmet>

      <h1>{ data.pageTitle }</h1>

      <div className={ cls.skills }>
        <ul className={ cls.percent + ' list__unstyled' }>
          <li className={ cls.percent__row }>100%</li>
          <li className={ cls.percent__row }>90%</li>
          <li className={ cls.percent__row }>80%</li>
          <li className={ cls.percent__row }>70%</li>
          <li className={ cls.percent__row }>60%</li>
          <li className={ cls.percent__row }>50%</li>
          <li className={ cls.percent__row }>40%</li>
          <li className={ cls.percent__row }>30%</li>
          <li className={ cls.percent__row }>20%</li>
          <li className={ cls.percent__row }>10%</li>
          <li className={ cls.percent__row }>0</li>
        </ul>

        <ol className={ cls.progress + ' list__unstyled' }>
          <li className={ cls.progress__col } style={ { width: '45%', height: '45%' } }>
            <div className={ cls.progress__label }>React</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '35%', height: '35%' } }>
            <div className={ cls.progress__label }>Vue</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '45%', height: '45%' } }>
            <div className={ cls.progress__label }>Node</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '65%', height: '65%' } }>
            <div className={ cls.progress__label }>JS</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '70%', height: '70%' } }>
            <div className={ cls.progress__label }>Webpack</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '80%', height: '80%' } }>
            <div className={ cls.progress__label }>Gulp</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '85%', height: '85%' } }>
            <div className={ cls.progress__label }>Git</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '90%', height: '90%' } }>
            <div className={ cls.progress__label }>CSS</div>
          </li>

          <li className={ cls.progress__col } style={ { width: '95%', height: '95%' } }>
            <div className={ cls.progress__label }>HTML</div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Skills;
