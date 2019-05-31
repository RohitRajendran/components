/** @module Checkboxes */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OptionBox from '~components/atoms/OptionBox/OptionBox';

import './Checkboxes.scss';

const Checkboxes = ({
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
      'uic--mcgonagall-checkbox-button-container': true,
    },
    className
  );

  const legendClasses = classNames({
    'uic--table': table,
    'uic--w-100': true,
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
            'uic--d-flex': true,
            'uic--align-center': true,
            'uic--disabled': disabled || option.disabled,
            'uic--checkbox-label': true,
            'uic--position-relative': true,
            'uic--w-100': true,
          });

          const labelWrapper =
            'uic--w-100 uic--d-flex uic--align-items-center uic--flex-direction-row uic--flex-wrap';

          const checkboxClasses = classNames({
            'uic--mcgonagall-checkbox-button': true,
            'uic--d-flex': true,
            'uic--justify-content-between': true,
            'uic--flex-column': true,
            'uic--mcgonagall-checkbox-button-followup':
              option.followup && values.has(option.value),
          });

          return (
            <div className={checkboxClasses} key={option.value}>
              <label className={labelClasses}>
                <span className={labelWrapper}>
                  <input
                    name={name}
                    className="uic--checkbox-input uic--position-absolute"
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
                  <span className="uic--label-value">{option.label}</span>
                </span>
                {option.secondaryLabel && (
                  <span className="uic--label-value-secondary">
                    {option.secondaryLabel}
                  </span>
                )}
              </label>

              {option.followup && values.has(option.value) && (
                <div className="uic--followup uic--w-100">
                  {option.followup}
                </div>
              )}
            </div>
          );
        })}
      </legend>
    </fieldset>
  );
};

Checkboxes.propTypes = {
  /** A string representing the name of the select button group. For example `yesNo` or something similar. */
  name: PropTypes.string.isRequired,
  /** Additional classes to apply to the container. */
  className: PropTypes.string,
  /** Determines if the entire group of radio buttons should be disabled or not. */
  disabled: PropTypes.bool,
  /** Renders the select button group in a table. */
  table: PropTypes.bool,
  /** An array of objects containing options that should be rendered. These options are explained below. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** The value of the select button, for example `yes` or `no`. */
      value: PropTypes.string.isRequired,
      /** The text that should appear next to the select button. */
      label: PropTypes.string.isRequired,
      /** Renders a followup input or message if the radio button is selected. */
      followup: PropTypes.node,
      /** Displays a secondary label to the far right of the radio button.  */
      secondaryLabel: PropTypes.string,
      /** Disables the option. */
      disabled: PropTypes.bool,
    })
  ),
  /** Determines if an input from the group is required or not for form validation. */
  required: PropTypes.bool,
  /** The current selected option(s) in the select button group. Represented as an array of strings. */
  value: PropTypes.arrayOf(PropTypes.string),
  /** Change handler which passes back the name and value of the option which is currently selected. */
  onChange: PropTypes.func.isRequired,
};

export default Checkboxes;
