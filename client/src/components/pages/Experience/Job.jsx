import PropTypes from 'prop-types';
import JobItem from './JobItem';

const Job = ({ jobData, cls }) => {
  return (
    <ol className="list__unstyled">
      { jobData.map(job =>
        <JobItem key={ job._id } job={ job } cls={cls} />,
      ) }
    </ol>
  );
};

Job.propTypes = {
  jobData: PropTypes.array.isRequired,
  cls: PropTypes.object.isRequired,
};

export default Job;
