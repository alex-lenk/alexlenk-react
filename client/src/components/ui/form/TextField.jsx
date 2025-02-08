import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return 'form__control' + (error ? ' is-invalid' : '');
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="form__group has-validation">
      <input
        type={ showPassword ? 'text' : type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ handleChange }
        className={ getInputClasses() }
        placeholder={ label }
      />
      { type === 'password' && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={ toggleShowPassword }
        >
          <i
            className={
              'bi bi-eye' + (showPassword ? '-slash' : '')
            }
          ></i>
        </button>
      ) }
      { label && <label className="form__label" htmlFor={ name }>{ label }</label> }
      { error && <div className="invalid-feedback">{ error }</div> }
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
