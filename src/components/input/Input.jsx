import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { name, type, value, className, labelText, placeholder, handleChange, id } = props;
  return (
    <>
      <div className="form-row">
        {labelText && (
          <label htmlFor={name} className="form-label">
            {labelText}
          </label>
        )}

        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={className ? `${className}` : 'form-input'}
          autoComplete={'false'}
        />
      </div>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
