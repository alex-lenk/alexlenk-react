import PropTypes from 'prop-types';

const TextareaField = ({ label, name, value, onChange, error, placeholder }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return 'form__textarea' + (error ? ' is-invalid' : '');
  };

  return (
    <div className="form__group has-validation">
      <textarea
        id={ name }
        name={ name }
        value={ value }
        onChange={ handleChange }
        className={ getInputClasses() }
        placeholder={placeholder ?? label}
      />
      { label && <label className="form__label" htmlFor={ name }>{ label }</label> }
      { error && <div className="invalid-feedback ">{ error }</div> }
    </div>
  );
};

TextareaField.defaultProps = {
  type: 'text',
};

TextareaField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextareaField;
