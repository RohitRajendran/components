/** @module SelectButtons */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SelectButtons.scss';

const SelectButtons = ({
  name,
  disabled,
  table,
  options,
  required,
  value,
  className,
  onChange,
}) => {
  const containerClasses = classNames(
    {
      'mcgonagall-checkbox-button-container': true,
      table,
    },
    className
  );

  // Stores the values of all of the selected items.
  const values = new Set(Array.isArray(value) ? value : [value]);

  const handleChange = (event) => {
    event.stopPropagation();
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      values.add(selectedValue);
    } else {
      values.delete(selectedValue);
    }

    return onChange(name, Array.from(values));
  };

  return (
    <div className={containerClasses}>
      {options.map((option) => (
        <div className="mcgonagall-checkbox-button" key={option.value}>
          <label
            className={`${
              disabled || option.disabled ? 'disabled' : ''
            } checkbox-label`}
          >
            <input
              name={name}
              className="checkbox-input"
              type="checkbox"
              defaultValue={option.value}
              disabled={disabled || option.disabled}
              checked={values.has(option.value)}
              onChange={handleChange}
              required={required}
            />
            <span className="checkbox" />
            <span className="label-value">{option.label}</span>

            {option.followup && values.has(option.value) && (
              <div className="followup">{option.followup}</div>
            )}
          </label>

          {option.secondaryLabel && (
            <span className="label-value-secondary">
              {option.secondaryLabel}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

SelectButtons.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  table: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      followup: PropTypes.node,
      secondaryLabel: PropTypes.string,
    })
  ),
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectButtons;
