/** @module Input */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import MaskedInput from 'react-text-mask';
import TextareaAutosize from 'react-textarea-autosize';
import {isInViewport} from '~components/atoms/Input/Input.util';
import {CardShellContext} from '~components/molecules/CardShell/CardShell';
import {
  isDocumentDefined,
  isWindowDefined,
} from '~components/utilities/DetectBrowser/DetectBrowser';
import {
  currencyMasks,
  maskEnum,
  MaskTypes,
  percentageMasks,
} from './Input.masks';
import './Input.scss';

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

/** Renders the Input field component. */
class Input extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      height: 0,
    };

    this.tooltipNode = createRef();
    this.inputNode = createRef();
    this.toggleFocus = this.toggleFocus.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  /** Handles the focus toggling in cases where the default HTML behavior doesn't cut it.
   * @returns {undefined}
   */
  toggleFocus() {
    // Sets the height of the tooltip if applicable.
    if (this.tooltipNode.current && this.inputNode.current) {
      this.setState({
        height: !this.state.isActive
          ? this.tooltipNode.current.scrollHeight
          : 0,
      });

      const isVisible = isInViewport(
        this.tooltipNode.current,
        this.tooltipNode.current.scrollHeight,
      );

      // If the tooltip element is not in view it will automatically scroll the user to it.
      if (!isVisible && isWindowDefined()) {
        window.scrollTo({
          top:
            this.inputNode.current.offsetTop -
            this.tooltipNode.current.scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    }

    this.setState({isActive: !this.state.isActive});
  }

  /**
   * Determines if the input is valid or not.
   * @return {boolean} - Returns true or false depending on the validity.
   */
  isValid() {
    const {isValid = () => true, hideValidity = () => true} = this.props;
    const deepest = getDeepestInputElement(this);
    const isActive = isDocumentDefined() && deepest === document.activeElement;
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
    const {
      autoComplete,
      append,
      prepend,
      description,
      disableOptionalFlag,
      error,
      explanation,
      label,
      name,
      type,
      placeholder,
      value,
      required,
      pattern,
      maxLength,
      multiline,
      minRows,
      onChange,
      onKeyPress,
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
    /* We use an identifier here to apply pseudo inline styles to the
      input. This is done so prepended and appended values can get pushed
      into the CSS attr property. This allows us to (hopefully) target
      this specific input every time instead of applying it to all inputs on the page. */
    const identifier = Math.round(Math.random() * 10000000);

    const showInvalidity = !disabled ? !this.isValid() : false;
    const isEmpty = (value && value.length < 1) || !value;

    let InputType = 'input';
    let prependCharacter = prepend;
    let appendCharacter = append;
    let inputLabel = label;

    if (!prependCharacter && currencyMasks.includes(this.props.mask)) {
      prependCharacter = '$';
    }

    if (!appendCharacter && percentageMasks.includes(this.props.mask)) {
      appendCharacter = '%';
    }

    if (multiline) {
      InputType = TextareaAutosize;
    } else if (this.props.mask) {
      InputType = MaskedInput;
    }

    if (label && !required && !disableOptionalFlag) {
      inputLabel = `${label} (Optional)`;
    }

    const attrs = {
      type,
      name,
      placeholder:
        `${placeholder || ''}${appendCharacter || ''}` ||
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
      onKeyPress,
      minRows,
    };

    if (this.props.mask) {
      const mask = (this.props.mask && maskEnum[this.props.mask].mask) || null;

      if (mask.type === MaskTypes.currency && !onChange) {
        throw new Error(
          'CurrencyMasks require explicit onChange handler for IE11',
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
            : e.target.value,
        );
    }

    return (
      // The Context allows it to get the showRequiredError prop when in the CardShell
      <CardShellContext.Consumer>
        {({showRequiredError}) => {
          const reqErrorNecessary =
            (this.props.showRequiredError || showRequiredError) &&
            required &&
            !value;

          const containerClasses = classNames(
            {
              'uic--mcgonagall-input': true,
              'uic--position-relative': true,
              [`uic--input-append uic--input-append-${identifier}`]:
                appendCharacter && value.length > 0,
              [`uic--input-prepend uic--input-prepend-${identifier}`]: prependCharacter,
              'uic--empty': isEmpty,
              'uic--focus': this.state.isActive,
              'uic--error': showInvalidity || error || reqErrorNecessary,
              'uic--disabled': disabled,
              'uic--mcgonagall-input__tooltip-present': this.state.height !== 0,
            },
            className,
          );

          const tooltipClasses = classNames({
            'uic--mcgonagall-input__tooltip': true,
            'uic--position-absolute': true,
            'uic--mcgonagall-input__tooltip-hidden': this.state.height === 0,
          });

          return (
            <div
              className={containerClasses}
              style={style}
              data-value={value}
              ref={this.inputNode}
            >
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
              <div className="uic--mcgonagall-input__wrapper">
                {explanation && (
                  <div
                    ref={this.tooltipNode}
                    className={tooltipClasses}
                    style={{top: `-${this.state.height}px`}}
                  >
                    {explanation}
                  </div>
                )}
                <InputType
                  type="text"
                  data-cy={label}
                  aria-label={inputLabel}
                  autoComplete={
                    appendCharacter ? 'off' : autoComplete ? autoComplete : null
                  }
                  className="uic--position-relative"
                  onFocus={this.toggleFocus}
                  onBlur={this.toggleFocus}
                  ref={(input) => {
                    this.inputElement = input;
                    this.props.setRef && this.props.setRef(input);
                  }}
                  {...attrs}
                />
                <label className="uic--position-absolute">{inputLabel}</label>
              </div>
              {description &&
              !(showInvalidity || error || reqErrorNecessary) ? (
                <div className="uic--description">{description}</div>
              ) : (
                <div className="uic--validation-error">
                  {isEmpty && reqErrorNecessary
                    ? 'Required Field'
                    : validationErrorMsg ||
                      (this.props.mask &&
                        maskEnum[this.props.mask].validationErrorMsg)}
                </div>
              )}
            </div>
          );
        }}
      </CardShellContext.Consumer>
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
  /** Displays explanation text on input focus. */
  explanation: PropTypes.string,
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
  value: PropTypes.string,
  /** Boolean representing if the input value is required in a form. */
  required: PropTypes.bool,
  /** Disables the (Optional) flag when a field is not marked as required. */
  disableOptionalFlag: PropTypes.bool,
  /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
  pattern: PropTypes.string,
  /** The max length of the input field value. */
  maxLength: PropTypes.number,
  /** Whether the input is text area vs a single line */
  multiline: PropTypes.bool,
  /** The starting number of text rows in the input */
  minRows: PropTypes.number,
  /** Allows you to select which input type is allowed in the field. */
  mask: PropTypes.oneOf(Object.keys(maskEnum)),
  /** Handle which is run whenever a user makes a key press within the input. */
  onKeyPress: PropTypes.func,
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
  /** Displays error state for incomplete required fields */
  showRequiredError: PropTypes.bool,
  /** Optional inline styles. */
  style: PropTypes.objectOf(PropTypes.string),
};

Input.defaultProps = {
  type: 'text',
  value: '',
  minRows: 3,
};

export default Input;
