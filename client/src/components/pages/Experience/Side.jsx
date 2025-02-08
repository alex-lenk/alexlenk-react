import PropTypes from 'prop-types';

const Side = ({ data, cls }) => {
  const { side, side_title, side_content, side_num, side_text } = cls;

  return (
    <aside className={ side }>
      <div className={ side_title }>{ data.title }</div>

      <div className={ side_content }>
        <div className={ side_num }>{ data.projects }</div>
        <div className={ side_text } dangerouslySetInnerHTML={ { __html: data.text } }></div>
      </div>
    </aside>
  );
};

Side.propTypes = {
  data: PropTypes.object.isRequired,
  cls: PropTypes.object.isRequired,
};

export default Side;
