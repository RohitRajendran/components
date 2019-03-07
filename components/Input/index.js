import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

import './style.scss';

export const hideValidityFalse = () => false;
export const MaskTypes = {currency: 'currency'};

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

/** Renders an Input field. */
class Input extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      value: '',
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  /** Handles the focus toggling in cases where the default HTML behavior doesn't cut it.
   * @returns {undefined}
   */
  toggleFocus() {
    this.setState({isActive: !this.state.isActive});
  }

  /** Updates the data-value part of the component, used for input pre-pending.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  updateValue(event) {
    this.setState({value: event.target.value});
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
    } = this.props;

    const attrs = {
      type,
      name,
      placeholder,
      value,
      required,
      pattern,
      onChange,
      maxLength,
      min,
      max,
      step,
      disabled,
    };

    const showInvalidity = !this.isValid();

    let InputType = 'input';

    if (this.props.mask) {
      InputType = MaskedInput;
    }

    if (this.props.mask) {
      if (this.props.mask.type === MaskTypes.currency && !onChange) {
        throw new Error(
          'CurrencyMasks require explicit onChange handler for IE11'
        );
      }
      attrs.mask = this.props.mask.mask;
      attrs.guide = false;
      if (this.props.mask.pipe) {
        attrs.pipe = this.props.mask.pipe;
        attrs.keepCharPositions = true;
      }
    }
    if (validateOnBlur) {
      attrs.onBlur = () => {
        this.forceUpdate();
        this.toggleFocus();
      };
    }

    return (
      <div
        className={`mcgonagall-input ${
          append
            ? `input-append input-append-${identifier}`
            : prepend
            ? `input-prepend input-prepend-${identifier}`
            : ''
        } ${this.state.isActive ? 'focus' : ''} ${
          showInvalidity ? 'error' : ''
        }`}
        data-value={this.state.value.length > 0 ? this.state.value : null}
      >
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
          onInput={this.updateValue}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          ref={(input) => {
            this.inputElement = input;
            this.props.setRef && this.props.setRef(input);
          }}
          {...attrs}
        />
        <label>{label}</label>
        {description && !showInvalidity ? (
          <div className="description">{description}</div>
        ) : description && showInvalidity ? (
          <div className="validation-error">
            {validationErrorMsg || 'Valid'}
          </div>
        ) : (
          <div className="validation-error">
            {validationErrorMsg || 'Valid'}
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
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  maxLength: PropTypes.number,
  mask: PropTypes.object,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onBlur: PropTypes.func,
  validationErrorMsg: PropTypes.string,
  validateOnBlur: PropTypes.bool,
  disabled: PropTypes.bool,
  inputClasses: PropTypes.string,
  setRef: PropTypes.func,
  hideValidity: PropTypes.func,
  isValid: PropTypes.func,
};

export default Input;
