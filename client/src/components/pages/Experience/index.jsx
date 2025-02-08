import { Helmet } from 'react-helmet-async';
import { useGetExperienceDataQuery } from 'api/experienceApiSlice';
import { useGetJobDataQuery } from 'api/jobApiSlice';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';
import Side from './Side';
import Job from './Job';
import cls from './experience.module.scss';

const Experience = () => {
  const { data, error, isLoading } = useGetExperienceDataQuery();
  const { data: jobData, error: jobError, isLoading: jobIsLoading } = useGetJobDataQuery();

  if (isLoading || jobIsLoading) return <Loader/>;
  if (error || jobError) return <ErrorPage error={ [error.message, jobError.message] }/>;

  return (
    <>
      <Helmet>
        <title>{ data.browserTitle }</title>
      </Helmet>

      <h1>{ data.pageTitle }</h1>

      <section className={ cls.experience }>
        <div className={ cls.content }>
          <div className={ cls.section }>
            <h2 className="text__white">{ data.name }</h2>

            <div dangerouslySetInnerHTML={ { __html: data.text } }/>
          </div>

          <h3 className="text__white">{ data.overTitleWork }</h3>

          <Job jobData={ jobData } cls={ cls }/>
        </div>

        <Side data={ data.aside } cls={ cls }/>
      </section>
    </>
  );
};

export default Experience;
