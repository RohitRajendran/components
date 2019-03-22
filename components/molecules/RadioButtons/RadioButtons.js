/** @module RadioButtons */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OptionBox from '~components/atoms/OptionBox/OptionBox';

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
    'uic--w-100': true,
  });

  return (
    <fieldset role="group" className={containerClasses} required={required}>
      <legend className={legendClasses}>
        {options.map((option) => {
          const labelClasses = classNames({
            disabled: disabled || option.disabled,
            'radio-label': true,
            'uic--w-100': true,
            'uic--position-relative': true,
            'uic--d-flex': true,
            'uic--align-items-center': true,
            'uic--flex-direction-row': true,
            'uic--flex-wrap': true,
          });
          return (
            <div
              className="mcgonagall-radio-button uic--d-flex uic--justify-content-between"
              key={option.value}
            >
              <label className={labelClasses}>
                <input
                  name={name}
                  className="radio-input uic--position-absolute"
                  type="radio"
                  disabled={disabled || option.disabled}
                  value={option.value}
                  checked={option.value === value}
                  onChange={() => onChange && onChange(name, option.value)}
                />
                <OptionBox
                  variant="radio"
                  checked={option.value === value}
                  disabled={disabled || option.disabled}
                />
                <span className="label-value">{option.label}</span>
                {option.followup && option.value === value && (
                  <div className="followup uic--w-100 ">{option.followup}</div>
                )}
              </label>

              {option.secondaryLabel && (
                <span className="label-value-secondary">
                  {option.secondaryLabel}
                </span>
              )}
            </div>
          );
        })}
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
  onChange: PropTypes.func,
};

export default RadioButtons;
