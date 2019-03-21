/** @module Input */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import _ from 'lodash';

import './Input.scss';

export const hideValidityFalse = () => false;
export const MaskTypes = {currency: 'currency'};

/** @constant {regex[]} The mask for a phone number */
export const phoneNumberMask = {
  mask: [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  regex: /\(?[1-9]\d{2}\)? ?\d{3}-?\d{4}/,
};

/** @constant {regex[]} The mask for an SSN */
export const ssnNumberMask = {
  mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  regex: /\d{3}-\d{2}-\d{4}/,
};

/** @constant {regex[]} The mask for a date */
export const dateMask = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: createAutoCorrectedDatePipe('mm/dd/yyyy'),
  regex: /\d\d\/\d\d\/\d\d\d\d/,
};

/** @constant {regex[]} The mask for a month/year date */
export const monthMask = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: createAutoCorrectedDatePipe('mm/yyyy'),
  regex: /\d\d\/\d\d\d\d/,
};

/** @constant {regex[]} The mask for a zip code */
export const zipMask = {
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
  regex: /^\d{5}(-\d{4})?$/,
};

/**
 * Create a ticker mask which only accepts capital letters
 * @param {string} input - raw input from component
 * @returns {regex[]} The mask
 */
export const tickerMask = {
  /* istanbul ignore next */
  mask(input) {
    return _.fill(Array(input.length), /[a-zA-Z]/);
  },
  regex: /[a-zA-Z]+/,
};

/**
 * Create a mask which only accepts letters, commas, and spaces
 * @param {string} input - raw input from component
 * @returns {regex[]} the mask
 */
export const commaSeparatedMask = {
  /* istanbul ignore next */
  mask(input) {
    return _.fill(Array(input.length + 1), /[A-Za-z, ]/);
  },
  regex: /[A-Za-z]+[A-Za-z, ]*/,
};

/** @constant {Object} - A currency mask */
export const currencyMask = {
  mask: createNumberMask({prefix: ''}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
};

/** @constant {Object} A currency mask */
export const currencyMaskAllowNegative = {
  mask: createNumberMask({prefix: '', allowNegative: true}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
};

/** @constant {Object} - A currency mask that accepts decimals */
export const currencyDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
  }),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
};

/** @constant {Object} - A number mask */
export const numberMask = {
  mask: createNumberMask({
    prefix: '',
    includeThousandsSeparator: false,
    allowLeadingZeroes: true,
  }),
  regex: /[0-9]+/,
};

/** @constant {Object} - A percentage mask that allows decimals */
export const percentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
  }),
  regex: /[0-9]+/,
};

/** @constant {Object} - A percentage mask that allows decimals */
export const percentageWithDecimalMaskAllowNegative = {
  mask: createNumberMask({
    prefix: '',
    allowNegative: true,
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
  }),
  regex: /[0-9]+/,
};

/**
 * @constant {Object} - A percentage mask for percentages < 100% and up
 * to three digits after the decimal place.
 */
export const smallPercentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    suffix: '%',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
    integerLimit: 2,
  }),
  regex: /\d{0,2}(\.\d{0,3})?/,
};

/** @constant {Object} - A mask to loosely match Apex account numbers */
export const apexAccount = {
  mask: [/\d/, /[A-Z]/, /[A-Z]/, /\d/, /\d/, /\d/, /\d/, /\d/],
  regex: /\d[A-Z]{2}\d{5}/,
};

/** Gets the deepest input element for validation.
 * @param {object} startObject - The first input.
 * @returns {object} - The deepest input field.
 */
export const getDeepestInputElement = (startObject) => {
  if (!startObject.inputElement) {
    return startObject;
  }
  return getDeepestInputElement(startObject.inputElement);
};

/** @constant {Object} - Maps prop names prop mask types. */
export const maskEnum = {
  PhoneNumber: phoneNumberMask,
  SsnNumber: ssnNumberMask,
  Date: dateMask,
  Month: monthMask,
  Zip: zipMask,
  Ticker: tickerMask,
  CommaSeparated: commaSeparatedMask,
  Currency: currencyMask,
  CurrencyDecimal: currencyDecimalMask,
  CurrencyAllowNegative: currencyMaskAllowNegative,
  Number: numberMask,
  PercentageWithDecimal: percentageWithDecimalMask,
  SmallPercentageWithDecimal: smallPercentageWithDecimalMask,
};

/** Renders the Input field component. */
class Input extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      value: props.value,
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  /** Handles the focus toggling in cases where the default HTML behavior doesn't cut it.
   * @returns {undefined}
   */
  toggleFocus() {
    this.setState({isActive: !this.state.isActive});
  }

  /**
   * Determines if the input is valid or not.
   * @return {boolean} - Returns true or false depending on the validity.
   */
  isValid() {
    const {isValid = () => true, hideValidity = () => true} = this.props;
    const deepest = getDeepestInputElement(this);
    const isActive = deepest === document.activeElement;
    const isEmpty =
      deepest.value === '' || typeof deepest.value === 'undefined';
    return isValid() || (hideValidity() && isActive) || isEmpty;
  }

  /** @inheritdoc */
  render() {
    const identifier = Math.round(Math.random() * 10000000);
    const {
      append,
      prepend,
      description,
      error,
      label,
      name,
      type,
      placeholder,
      value,
      required,
      pattern,
      maxLength,
      onChange,
      min,
      max,
      step,
      validationErrorMsg,
      validateOnBlur,
      disabled,
      inputClasses,
      className,
    } = this.props;

    const attrs = {
      type,
      name,
      placeholder,
      value,
      required,
      onChange,
      maxLength,
      min,
      max,
      step,
      disabled,
      pattern,
    };

    const showInvalidity = !this.isValid();

    let InputType = 'input';

    if (this.props.mask) {
      InputType = MaskedInput;
    }

    if (this.props.mask) {
      const mask = maskEnum[this.props.mask] || null;

      if (mask.type === MaskTypes.currency && !onChange) {
        throw new Error(
          'CurrencyMasks require explicit onChange handler for IE11'
        );
      }
      attrs.mask = mask.mask;
      attrs.guide = false;
      if (mask.pipe) {
        attrs.pipe = mask.pipe;
        attrs.keepCharPositions = true;
      }
    }
    if (validateOnBlur) {
      attrs.onBlur = () => {
        this.forceUpdate();
        this.toggleFocus();
      };
    }

    const containerClasses = classNames(
      {
        [`input-append input-append-${identifier}`]: append && value.length > 0,
        [`input-prepend input-prepend-${identifier}`]: prepend,
        empty: (value && value.length < 1) || !value,
        focus: this.state.isActive,
        error: showInvalidity || error,
        disabled,
      },
      `mcgonagall-input ${className}`
    );

    return (
      <div className={containerClasses} data-value={value}>
        {append && (
          <style>
            {`
              .input-append-${identifier}[data-value]:after {
                content: attr(data-value) '${append}';
              }
            `}
          </style>
        )}

        {prepend && (
          <style>
            {`
              .input-prepend-${identifier}:before {
                content: '${prepend}';
              }
            `}
          </style>
        )}
        <InputType
          type="text"
          className={inputClasses}
          aria-label={this.props.label}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          ref={(input) => {
            this.inputElement = input;
            this.props.setRef && this.props.setRef(input);
          }}
          {...attrs}
        />
        <label>{label}</label>
        {description && (!showInvalidity || !error) ? (
          <div className="description">{description}</div>
        ) : description && (showInvalidity || error) ? (
          <div className="validation-error">
            {validationErrorMsg || 'Invalid'}
          </div>
        ) : (
          <div className="validation-error">
            {validationErrorMsg || 'Invalid'}
          </div>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  append: PropTypes.string,
  prepend: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  maxLength: PropTypes.number,
  mask: PropTypes.oneOf([
    'PhoneNumber',
    'SsnNumber',
    'Date',
    'Month',
    'Zip',
    'Ticker',
    'CommaSeparated',
    'Currency',
    'CurrencyAllowNegative',
    'Number',
    'PercentageWithDecimal',
    'SmallPercentageWithDecimal',
  ]),
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  validationErrorMsg: PropTypes.string,
  validateOnBlur: PropTypes.bool,
  disabled: PropTypes.bool,
  inputClasses: PropTypes.string,
  setRef: PropTypes.func,
  hideValidity: PropTypes.func,
  isValid: PropTypes.func,
  error: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
