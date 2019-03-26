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
            disabled: disabled || option.disabled,
            'checkbox-label': true,
            'uic--position-relative': true,
          });

          const labelWrapper = classNames({
            'uic--w-100': true,
            'uic--d-flex': true,
            'uic--align-items-center': true,
            'uic--flex-direction-row': true,
            'uic--flex-wrap': true,
          });

          return (
            <div
              className="mcgonagall-checkbox-button uic--d-flex uic--justify-content-between"
              key={option.value}
            >
              <label className={labelClasses}>
                <span className={labelWrapper}>
                  <input
                    name={name}
                    className="checkbox-input uic--position-absolute"
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
                </span>
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
  /** Change handler which passes back the `value` of the option which is currently selected. */
  onChange: PropTypes.func.isRequired,
};

export default SelectButtons;
