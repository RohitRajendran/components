/** @module RadioButtons */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OptionBox from '../OptionBox/OptionBox';

import './RadioButtons.scss';

const RadioButtons = ({
  name,
  disabled,
  table,
  options,
  required,
  value,
  onChange,
  className,
}) => {
  const containerClasses = classNames(
    {
      'mcgonagall-radio-button-container': true,
      table,
    },
    className
  );

  const legendClasses = classNames({
    table,
  });

  return (
    <fieldset role="group" className={containerClasses}>
      <legend className={legendClasses}>
        {options.map((option) => (
          <div className="mcgonagall-radio-button" key={option.value}>
            <label
              className={`${
                disabled || option.disabled ? 'disabled' : ''
              } radio-label`}
              key={option.value}
            >
              <input
                name={name}
                className="radio-input"
                type="radio"
                disabled={disabled || option.disabled}
                required={required}
                value={option.value}
                checked={option.value === value}
                onChange={() => onChange(name, option.value)}
              />
              <OptionBox
                variant="radio"
                checked={option.value === value}
                disabled={disabled || option.disabled}
              />
              <span className="label-value">{option.label}</span>

              {option.followup && option.value === value && (
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
      </legend>
    </fieldset>
  );
};
RadioButtons.propTypes = {
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

export default RadioButtons;
