/** @module SelectButtons */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OptionBox from '~components/atoms/OptionBox/OptionBox';

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
    },
    className
  );

  const legendClasses = classNames({
    table,
  });

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
    <fieldset role="group" className={containerClasses} required={required}>
      <legend className={legendClasses}>
        {options.map((option) => {

          const labelClasses = classNames({
            'disabled': disabled || option.disabled,
            'checkbox-label': true,
            'uic--d-flex': true,
            'uic--align-items-center': true,
            'uic--flex-direction-row': true,
            'uic--flex-wrap': true,
          });

          return (
            <div className="mcgonagall-checkbox-button uic--d-flex uic--justify-content-between" key={option.value}>
            <label
              className={labelClasses}
            >
              <input
                name={name}
                className="checkbox-input"
                type="checkbox"
                defaultValue={option.value}
                disabled={disabled || option.disabled}
                checked={values.has(option.value)}
                onChange={handleChange}
                aria-label={option.label}
              />
              <OptionBox
                variant="check"
                checked={values.has(option.value)}
                disabled={disabled || option.disabled}
              />
              <span className="label-value">{option.label}</span>

              {option.followup && values.has(option.value) && (
                <div className="followup uic--w-100">{option.followup}</div>
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectButtons;
