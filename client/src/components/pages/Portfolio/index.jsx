import { Helmet } from 'react-helmet-async';
import { useGetPortfolioDataQuery } from 'api/portfolioApiSlice';
import { useGetProjectsDataQuery } from 'api/projectsApiSlice';
import Loader from 'components/common/Loader';
import ErrorPage from 'components/common/ErrorPage';
import ProjectList from './ProjectsList';

const Portfolio = () => {
  const { data, error, isLoading } = useGetPortfolioDataQuery();
  const { data: projectsData, error: projectsError, isLoading: projectsIsLoading } = useGetProjectsDataQuery();

  if (isLoading || projectsIsLoading) return <Loader/>;
  if (error || projectsError) return <ErrorPage error={ [error.message, projectsError.message] }/>;

  return (
    <>
      <Helmet>
        <title>{ data.browserTitle }</title>
      </Helmet>

      <h1>{ data.pageTitle }</h1>

      <ProjectList projectsData={ projectsData }/>
    </>
  );
};

export default Portfolio;
