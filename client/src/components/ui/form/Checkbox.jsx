import PropTypes from 'prop-types';

const Checkbox = ({ label, type, name, value, onChange, error }) => {
  const handleChange = () => {
    onChange({ name, value: !value });
  };
  const getInputClasses = () => {
    return (
      'w-4 h-4 border border-gray-300 rounded bg-gray-50  ' +
      (error
        ? 'border-rose-500 focus:ring-red-500'
        : 'focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800')
    );
  };
  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          type={ type }
          name={ name }
          checked={ value }
          onChange={ handleChange }
          className={ getInputClasses() }
          required
        />
      </div>
      <label
        htmlFor={ name }
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        { label }
        <a
          href="#"
          className="text-blue-600 hover:underline dark:text-blue-500 pl-1"
        >
          лицензионное соглашение
        </a>
        .
      </label>
      { error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{ error }</span>
        </p>
      ) }
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default Checkbox;
