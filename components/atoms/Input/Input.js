/** @module Input */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

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
    return Array(input.length).fill(/[a-zA-Z]/);
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
    return Array(input.length + 1).fill(/[A-Za-z, ]/);
  },
  regex: /[A-Za-z]+[A-Za-z, ]*/,
};

/** @constant {object} - A currency mask */
export const currencyMask = {
  mask: createNumberMask({prefix: ''}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
  sanitize: /[,]/g,
};

/** @constant {object} A currency mask */
export const currencyMaskAllowNegative = {
  mask: createNumberMask({prefix: '', allowNegative: true}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
  sanitize: /[,]/g,
};

/** @constant {object} - A currency mask that accepts decimals */
export const currencyDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
  }),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
  sanitize: /[,]/g,
};

/** @constant {object} - A number mask */
export const numberMask = {
  mask: createNumberMask({
    prefix: '',
    includeThousandsSeparator: false,
    allowLeadingZeroes: true,
  }),
  regex: /[0-9]+/,
};

/** @constant {object} - A percentage mask that allows decimals */
export const percentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
  }),
  regex: /[0-9]+/,
};

/** @constant {object} - A percentage mask that allows decimals */
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
 * @constant {object} - A percentage mask for percentages < 100% and up
 * to three digits after the decimal place.
 */
export const smallPercentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
    integerLimit: 2,
  }),
  regex: /\d{0,2}(\.\d{0,3})?/,
};

/** @constant {object} - A mask to loosely match Apex account numbers */
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
  ApexAccount: {mask: apexAccount},
  PhoneNumber: {mask: phoneNumberMask},
  SsnNumber: {mask: ssnNumberMask},
  Date: {
    mask: dateMask,
    placeholder: 'MM/DD/YYYY',
    isValid: (val) => {
      return val ? val.length === 10 : true;
    },
    validationErrorMsg: 'Invalid date value',
  },
  Month: {
    mask: monthMask,
    placeholder: 'MM/YYYY',
    isValid: (val) => {
      return val ? val.length === 7 : true;
    },
    validationErrorMsg: 'Invalid date value',
  },
  Zip: {mask: zipMask},
  Ticker: {mask: tickerMask},
  CommaSeparated: {mask: commaSeparatedMask},
  Currency: {mask: currencyMask},
  CurrencyDecimal: {mask: currencyDecimalMask},
  CurrencyAllowNegative: {mask: currencyMaskAllowNegative},
  Number: {mask: numberMask},
  PercentageWithDecimal: {mask: percentageWithDecimalMask},
  PercentageWithDecimalAllowNegative: {
    mask: percentageWithDecimalMaskAllowNegative,
  },
  SmallPercentageWithDecimal: {mask: smallPercentageWithDecimalMask},
};

/** @constant {Array} - Masks that should have '%' appended to it */
export const percentageMasks = [
  'SmallPercentageWithDecimal',
  'PercentageWithDecimal',
  'PercentageWithDecimalAllowNegative',
];

/** @constant {Array} - Masks that should have '$' prepended to it */
export const currencyMasks = [
  'Currency',
  'CurrencyDecimal',
  'CurrencyAllowNegative',
];

/** Renders the Input field component. */
class Input extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
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
      this.props.value === '' || typeof this.props.value === 'undefined';
    const maskValidation =
      this.props.mask && maskEnum[this.props.mask].isValid
        ? maskEnum[this.props.mask].isValid(this.props.value)
        : true;

    return (
      (isValid(this.props.value) && maskValidation) ||
      (hideValidity() && isActive) ||
      isEmpty
    );
  }

  /** @inheritdoc */
  render() {
    const identifier = Math.round(Math.random() * 10000000);
    const {
      autoComplete,
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
      className,
      sanitize,
      style,
    } = this.props;

    const attrs = {
      type,
      name,
      placeholder:
        placeholder ||
        (this.props.mask && maskEnum[this.props.mask].placeholder) ||
        null,
      value,
      required,
      maxLength,
      min,
      max,
      step,
      disabled,
      pattern,
    };

    const showInvalidity = !this.isValid();

    let InputType = 'input';
    let prependCharacter = prepend;
    let appendCharacter = append;

    if (!prependCharacter && currencyMasks.includes(this.props.mask)) {
      prependCharacter = '$';
    }

    if (!appendCharacter && percentageMasks.includes(this.props.mask)) {
      appendCharacter = '%';
    }

    if (this.props.mask) {
      InputType = MaskedInput;
    }

    if (this.props.mask) {
      const mask = (this.props.mask && maskEnum[this.props.mask].mask) || null;

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
    if (onChange) {
      const mask = this.props.mask && maskEnum[this.props.mask].mask;

      attrs.onChange = (e) =>
        onChange(
          name,
          sanitize && mask && mask.sanitize
            ? e.target.value.replace(mask.sanitize, '')
            : e.target.value
        );
    }

    const containerClasses = classNames(
      {
        'uic--mcgonagall-input': true,
        'uic--position-relative': true,
        [`uic--input-append uic--input-append-${identifier}`]:
          appendCharacter && value.length > 0,
        [`uic--input-prepend uic--input-prepend-${identifier}`]: prependCharacter,
        'uic--empty': (value && value.length < 1) || !value,
        'uic--focus': this.state.isActive,
        'uic--error': showInvalidity || error,
        'uic--disabled': disabled,
      },
      className
    );

    return (
      <div className={containerClasses} style={style} data-value={value}>
        {appendCharacter && (
          <style>
            {`
              .uic--input-append-${identifier}[data-value]:after {
                content: attr(data-value) '${appendCharacter}';
              }
            `}
          </style>
        )}

        {prependCharacter && (
          <style>
            {`
              .uic--input-prepend-${identifier}:before {
                content: '${prependCharacter}';
              }
            `}
          </style>
        )}
        <InputType
          type="text"
          aria-label={this.props.label}
          autoComplete={
            appendCharacter ? 'off' : autoComplete ? autoComplete : null
          }
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          ref={(input) => {
            this.inputElement = input;
            this.props.setRef && this.props.setRef(input);
          }}
          {...attrs}
        />
        <label className="uic--position-absolute">{label}</label>
        {description && !(showInvalidity || error) ? (
          <div className="uic--description">{description}</div>
        ) : (
          <div className="uic--validation-error">
            {validationErrorMsg ||
              (this.props.mask &&
                maskEnum[this.props.mask].validationErrorMsg) ||
              'Invalid'}
          </div>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  /** A string or symbol to append to the end of the input. For example `%`. Automatically applied for percentage masks. */
  append: PropTypes.string,
  /** Determines the autoComplete type on the input. */
  autoComplete: PropTypes.string,
  /** A string or symbol to pre-pend to the start of the input. For example `$`. Automatically applied for currency masks. */
  prepend: PropTypes.string,
  /** The label representing the input field. */
  label: PropTypes.string.isRequired,
  /** The name of the input field. */
  name: PropTypes.string.isRequired,
  /** The description of the input field. Displayed separately to the label. */
  description: PropTypes.string,
  /** The type of input field. */
  type: PropTypes.oneOf([
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  /** The placeholder text of the input field. This is displayed if there's no value. */
  placeholder: PropTypes.string,
  /** The current value of the input field.  */
  value: PropTypes.string.isRequired,
  /** Boolean representing if the input value is required in a form. */
  required: PropTypes.bool,
  /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
  pattern: PropTypes.string,
  /** The max length of the input field value. */
  maxLength: PropTypes.number,
  /** Allows you to select which input type is allowed in the field. */
  mask: PropTypes.oneOf(Object.keys(maskEnum)),
  /** Handler which is run whenever there's a change to the input. Passes back the name and value of input. */
  onChange: PropTypes.func,
  /** The minimum number value. Only applicable if the type is set to number. */
  min: PropTypes.number,
  /** The maximum number value. Only applicable if the type is set to number. */
  max: PropTypes.number,
  /** The value step increment. Only applicable if the type is set to number. */
  step: PropTypes.number,
  /** The error message to display when the input fails validation. */
  validationErrorMsg: PropTypes.string,
  /** Runs the validation logic on every blur event if toggled as true. */
  validateOnBlur: PropTypes.bool,
  /** Determines if the input field should prevent the user interacting with it. */
  disabled: PropTypes.bool,
  /** Sets the ref to the input. */
  setRef: PropTypes.func,
  /** Hides the validation message under the defined conditions. */
  hideValidity: PropTypes.func,
  /** Validates the input based on the provided logic. */
  isValid: PropTypes.func,
  /** Forces the input into an error state. */
  error: PropTypes.bool,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Sanitizes the input when passed back by the onChange handler. */
  sanitize: PropTypes.bool,
  /** Optional inline styles. */
  style: PropTypes.objectOf(PropTypes.string),
};

Input.defaultProps = {
  type: 'text',
  value: '',
};

export default Input;
