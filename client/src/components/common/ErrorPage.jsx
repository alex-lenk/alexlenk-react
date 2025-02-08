import PropTypes from 'prop-types';

const ErrorPage = ({ error }) => <div>Error: { error.map(instance => instance) }</div>;

ErrorPage.propTypes = {
  error: PropTypes.array,
};

export default ErrorPage;
