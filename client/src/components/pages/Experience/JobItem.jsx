import PropTypes from 'prop-types';
import { calculateEmploymentDuration } from 'utils/calculateEmploymentDuration';
import { formatDate } from 'utils/formatDate';

const JobItem = ({ job, cls }) => {
  const { title, workStart, workEnd, description } = job;
  const { work_item, work_title, work_date, work_desk } = cls;

  return (
    <li className={work_item}>
      <div className={work_title}>{ title }</div>
      <div className={work_date}>
        <span className="text__white">
          { formatDate(workStart) } — { formatDate(workEnd) } &nbsp;
          ({ calculateEmploymentDuration(workStart, workEnd) })
        </span>
      </div>
      <div className={work_desk} dangerouslySetInnerHTML={ { __html: description } }/>
    </li>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
  cls: PropTypes.object.isRequired,
};

export default JobItem;
