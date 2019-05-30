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
      'uic--mcgonagall-radio-button-container': true,
      'uic--table': table,
    },
    className
  );

  const legendClasses = classNames({
    'uic--table': table,
    'uic--w-100': true,
  });

  return (
    <fieldset role="group" className={containerClasses} required={required}>
      <legend className={legendClasses}>
        {options.map((option) => {
          const labelClasses = classNames({
            'uic--disabled': disabled || option.disabled,
            'uic--radio-label': true,
            'uic--position-relative': true,
            'uic--w-100': true,
          });

          const labelWrapper =
            'uic--w-100 uic--d-flex uic--align-items-center uic--flex-direction-row uic--flex-wrap';

          const radioButtonClasses = classNames({
            'uic--mcgonagall-radio-button': true,
            'uic--d-flex': true,
            'uic--justify-content-between': true,
            'uic--flex-column': true,
            'uic--mcgonagall-radio-button-followup':
              option.followup && option.value === value,
          });

          let optionValue = option.value;
          if (typeof option.value === 'boolean') {
            optionValue = option.value.toString().toLowerCase();

            if (!onChange) {
              throw new Error('Boolean values require an onChange handler');
            }
          }

          return (
            <div className={radioButtonClasses} key={option.value}>
              <label className={labelClasses}>
                <span className={labelWrapper}>
                  <input
                    name={name}
                    className="uic--radio-input uic--position-absolute"
                    type="radio"
                    disabled={disabled || option.disabled}
                    value={optionValue}
                    checked={option.value === value}
                    onChange={() => onChange && onChange(name, option.value)}
                  />
                  <OptionBox
                    variant="radio"
                    checked={option.value === value}
                    disabled={disabled || option.disabled}
                  />

                  <span className="uic--label-value">{option.label}</span>
                </span>
              </label>
              {option.followup && option.value === value && (
                <div className="uic--followup uic--w-100">
                  {option.followup}
                </div>
              )}
              {option.secondaryLabel && (
                <span className="uic--label-value-secondary">
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
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
      /** The text that should appear next to the radio button. */
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
  /** The current selected option in the radio button group. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Change handler which takes in the `name` of the input and the `value` of the option which is currently selected. */
  onChange: PropTypes.func,
};

export default RadioButtons;
