import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useGetHomeDataQuery } from 'api/homeApiSlice';
import { ROUTES_LINKS, PAGE_NAMES } from 'routes';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';
import HomeCard from './HomeCard';

import cls from './home.module.scss';

const Home = () => {
  const { data, error, isLoading } = useGetHomeDataQuery();

  if (isLoading) return <Loader/>;
  if (error) return <ErrorPage error={ [error.message] }/>;

  return (
    <section className={ cls.wrapper }>
      <Helmet>
        <title>{ data.browserTitle }</title>
      </Helmet>

      <article className={ cls.content }>
        <div className={ cls.name }>{ data.name }</div>

        <h1 className={ cls.title }>{ data.pageTitle }</h1>

        <div className={ cls.phrase }>
          Пишу легкий, чистый
          <span className={ cls.decor }>&lt;code&gt;</span>

          <div className={ cls.text } data-decor="// ">
            Чтобы ваш сайт работал быстро и&nbsp;на&nbsp;полную.
          </div>
        </div>

        <Link to={ ROUTES_LINKS.PORTFOLIO } className={ cls.btn + ' btn btn__primary' }>{ PAGE_NAMES.PORTFOLIO }</Link>
      </article>

      <HomeCard/>
    </section>
  );
};

export default Home;
