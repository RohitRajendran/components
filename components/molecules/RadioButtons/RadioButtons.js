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
              className="mcgonagall-radio-button uic--d-flex uic--justify-content-between"
              key={option.value}
            >
              <label className={labelClasses}>
                <span className={labelWrapper}>
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
                </span>
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
  /** A string representing the name of the radio button group. For example `yesNo` or something similar. */
  name: PropTypes.string.isRequired,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Determines if the entire group of radio buttons should be disabled or not. */
  disabled: PropTypes.bool,
  /** Renders the radio button group in a table. */
  table: PropTypes.bool,
  /** An array of objects containing options that should be rendered. These options are explained below. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** The value of the radio button, for example `yes` or `no`. */
      value: PropTypes.string.isRequired,
      /** The text that should appear next to the radio button. */
      label: PropTypes.string.isRequired,
      /** Renders a followup input or message if the radio button is selected. */
      followup: PropTypes.node,
      /** Displays a secondary label to the far right of the radio button.  */
      secondaryLabel: PropTypes.string,
    })
  ),
  /** Determines if an input from the group is required or not for form validation. */
  required: PropTypes.bool,
  /** The current selected option in the radio button group. */
  value: PropTypes.string.isRequired,
  /** Change handler which takes in the `name` of the input and the `value` of the option which is currently selected. */
  onChange: PropTypes.func,
};

export default RadioButtons;
