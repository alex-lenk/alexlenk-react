import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useGetContactsDataQuery } from 'api/contactsApiSlice';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';
import cls from './contacts.module.scss';

const Contacts = () => {
  const { data, error, isLoading } = useGetContactsDataQuery();

  if (isLoading) return <Loader/>;
  if (error) return <ErrorPage error={ [error.message] }/>;

  return (
    <>
      <Helmet>
        <title>{ data.browserTitle }</title>
      </Helmet>

      <h1>{ data.pageTitle }</h1>

      <div className={ cls.text } dangerouslySetInnerHTML={ { __html: data.text } }/>

      <aside className={ cls.info }>
        <div className={ cls.info__container }>
          <div className={ cls.info__hot }>
            <Link className={ cls.info__phone } to={ `tel:${ data.phone }` }>{ data.phone }</Link>
          </div>

          <Link to={ `mailto:${ data.email }` } className={ cls.info__text }>{ data.email }</Link>
        </div>

        <span className={ cls.info__text }>{ data.address }</span>
      </aside>
    </>
  );
};

export default Contacts;
