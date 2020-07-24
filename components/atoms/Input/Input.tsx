/** @module Input */
import classNames from 'classnames';
import React, {
  PureComponent,
  createRef,
  RefObject,
  CSSProperties,
  ChangeEvent,
  ReactNode,
  ReactElement,
} from 'react';
import MaskedInput from 'react-text-mask';
import TextareaAutosize from 'react-textarea-autosize';
import {isInViewport} from '~components/atoms/Input/Input.util';
import {CardShellContext} from '~components/molecules/CardShell/CardShell';
import {
  isDocumentDefined,
  isWindowDefined,
} from '~components/utilities/DetectBrowser/DetectBrowser';
import {
  maskEnum,
  Mask,
  MaskChoice,
  MaskObj,
  CurrencyMask,
  PercentageMask,
} from './Input.masks';
import './Input.scss';

type InputOptions =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

type InputProps = {
  /** A string or symbol to append to the end of the input. For example `%`. Automatically applied for percentage masks. */
  append?: string;
  /** Determines the autoComplete type on the input. */
  autoComplete?: string;
  /** A string or symbol to pre-pend to the start of the input. For example `$`. Automatically applied for currency masks. */
  prepend?: string;
  /** The label representing the input field. */
  label: string;
  /** The name of the input field. */
  name: string;
  /** The description of the input field. Displayed separately to the label. */
  description?: string;
  /** Displays explanation text on input focus. */
  explanation?: string;
  /** The type of input field. */
  type: InputOptions;
  /** The placeholder text of the input field. This is displayed if there's no value. */
  placeholder?: string;
  /** The current value of the input field.  */
  value?: string;
  /** Boolean representing if the input value is required in a form. */
  required?: boolean;
  /** Disables the (Optional) flag when a field is not marked as required. */
  disableOptionalFlag?: boolean;
  /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
  pattern?: string;
  /** The max length of the input field value. */
  maxLength?: number;
  /** Whether the input is text area vs a single line */
  multiline?: boolean;
  /** The starting number of text rows in the input */
  minRows?: number;
  /** Allows you to select which input type is allowed in the field. */
  mask?: Mask | Mask['mask'] | string;
  /** Handle which is run whe never a user makes a key press within the input. */
  onKeyPress?: () => void;
  /** Handler which is run whenever there's a change to the input. Passes back the name and value of input. */
  onChange?: (value1: string, value2: string) => void;
  /** The minimum number value. Only applicable if the type is set to number. */
  min?: number;
  /** The maximum number value. Only applicable if the type is set to number. */
  max?: number;
  /** The value step increment. Only applicable if the type is set to number. */
  step?: number;
  /** The error message to display when the input fails validation. */
  validationErrorMsg?: string;
  /** Runs the validation logic on every blur event if toggled as true. */
  validateOnBlur?: boolean;
  /** Determines if the input field should prevent the user interacting with it. */
  disabled?: boolean;
  /** Sets the ref to the input. */
  setRef?: (input: RefObject<HTMLInputElement>) => void;
  /** Hides the validation message under the defined conditions. */
  hideValidity?: () => boolean;
  /** Validates the input based on the provided logic. */
  isValid?: (value?: string) => boolean;
  /** Forces the input into an error state. */
  error?: boolean;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Sanitizes the input when passed back by the onChange handler. */
  sanitize?: boolean;
  /** Displays error state for incomplete required fields */
  showErrorState?: boolean;
  /** Optional inline styles. */
  style?: CSSProperties;
  /** Custom validation function that the user wants the input validated against */
  validate?: (value?: string) => string;
  /** The actual input element in the component */
  inputElement?: RefObject<HTMLInputElement>;
};

type InputState = {
  isActive: boolean;
  height: number;
  validationErrorMessage: string;
};

type InputErrorStateProps = {
  showInvalidity: boolean;
  errorFlag: boolean;
  hasRequiredError: boolean;
};

type InputRequiredProps = {
  cardshellForceUnansweredQuestionError: boolean;
  showRequiredErrorFlagPresent: boolean;
  requiredFlagPresent: boolean;
  isEmpty: boolean;
};

type GenerateInputErrorMessageProps = {
  hasRequiredError: boolean;
  errorMsg: string;
  mask: MaskChoice;
};

type Attrs = {
  guide?: boolean;
  keepCharPositions?: boolean;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  mask: Mask['mask'];
} & Pick<
  InputProps,
  | 'type'
  | 'name'
  | 'placeholder'
  | 'value'
  | 'required'
  | 'maxLength'
  | 'min'
  | 'max'
  | 'step'
  | 'disabled'
  | 'pattern'
  | 'onKeyPress'
  | 'minRows'
> &
  Pick<Mask, 'pipe'>;

/** Gets the deepest input element for validation.
 * @param {object} startObject - The first input.
 * @returns {object} - The deepest input field.
 */
export const getDeepestInputElement = (startObject: Input): Input => {
  if (!startObject.inputElement) {
    return startObject;
  }
  return getDeepestInputElement((startObject.inputElement as unknown) as Input);
};

/**
 * Determines if the input should show the required error
 * @param {object} args - Object of args
 * @param {boolean} args.cardshellForceUnansweredQuestionError - HOC Cardshell boolean for error state
 * @param {boolean} args.showRequiredErrorFlagPresent - Does this input have the showRequiredError flag
 * @param {boolean} args.requiredFlagPresent - Does this input have the required flag
 * @param {boolean} args.isEmpty - Is the current user input an empty string
 * @returns {boolean} Should the input be in the requiredError state
 */
export const inputHasRequiredError = ({
  cardshellForceUnansweredQuestionError,
  showRequiredErrorFlagPresent,
  requiredFlagPresent,
  isEmpty,
}: InputRequiredProps): boolean =>
  (cardshellForceUnansweredQuestionError || showRequiredErrorFlagPresent) &&
  requiredFlagPresent &&
  isEmpty;

/**
 * Determines if the input component should be in the error state
 * @param {object} args - Object of args
 * @param {boolean} args.showInvalidity - Calculated boolean that says we should show an invalidError
 * @param {boolean} args.errorFlag - Does this input have the error flag
 * @param {boolean} args.hasRequiredError - Has the input been calculated to show the requiredError
 * @returns {boolean} Should the input be in a generic error state?
 */
export const isInputInErrorState = ({
  showInvalidity,
  errorFlag,
  hasRequiredError,
}: InputErrorStateProps): boolean =>
  showInvalidity || errorFlag || hasRequiredError;

/**
 * Sends back the appropriate error message for our input component
 * @param {object} args - Object of args
 * @param {boolean} args.hasRequiredError - Has the input value been calculated to be in the required error state
 * @param {string} args.errorMsg - Optional custom errorMsg
 * @param {string} args.mark - Optional mask for the input
 * @returns {string} Correct error message
 */
export const generateInputErrorMessage = ({
  hasRequiredError,
  errorMsg,
  mask,
}: GenerateInputErrorMessageProps): string => {
  if (hasRequiredError) {
    return 'Required Field';
  } else if (errorMsg) {
    return errorMsg;
  }

  return (maskEnum[mask] as MaskObj).validationErrorMsg;
};

/** Renders the Input field component. */
class Input extends PureComponent<InputProps, InputState> {
  tooltipNode: RefObject<HTMLDivElement>;
  inputNode: RefObject<HTMLInputElement>;
  inputElement?: RefObject<HTMLInputElement>;

  /** @inheritdoc */
  constructor(props: InputProps) {
    super(props);

    this.state = {
      isActive: false,
      height: 0,
      validationErrorMessage: '',
    };

    this.tooltipNode = createRef();
    this.inputNode = createRef();
    this.toggleFocus = this.toggleFocus.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  /** Handles the focus toggling in cases where the default HTML behavior doesn't cut it.
   * @returns Void
   */
  toggleFocus(): void {
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
   * @return Returns true or false depending on the validity.
   */
  isValid(): boolean {
    const {
      isValid = (): boolean => true,
      validate = (): string => '',
      hideValidity = (): boolean => true,
      mask,
      value,
    } = this.props;
    const deepest = getDeepestInputElement(this);
    const isActive =
      isDocumentDefined() &&
      deepest === ((document.activeElement as unknown) as Input);
    const isEmpty =
      this.props.value === '' || typeof this.props.value === 'undefined';
    const maskValidation =
      this.props.mask && maskEnum[mask as MaskChoice].isValid
        ? (maskEnum[mask as MaskChoice] as MaskObj).isValid(value)
        : true;
    this.setState({
      validationErrorMessage: validate(value),
    });

    return (
      !this.state.validationErrorMessage &&
      ((isValid(value) && maskValidation) ||
        (hideValidity() && isActive) ||
        isEmpty)
    );
  }

  /** @inheritdoc */
  render(): ReactElement {
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
      type = 'text',
      placeholder,
      value = '',
      required,
      pattern,
      maxLength,
      multiline,
      minRows = 3,
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
      showErrorState,
    } = this.props;
    /* We use an identifier here to apply pseudo inline styles to the
      input. This is done so prepended and appended values can get pushed
      into the CSS attr property. This allows us to (hopefully) target
      this specific input every time instead of applying it to all inputs on the page. */
    const identifier = Math.round(Math.random() * 10000000);

    const showInvalidity = !disabled ? !this.isValid() : false;
    const isEmpty = (value && value.length < 1) || !value;
    const errorMsg = validationErrorMsg || this.state.validationErrorMessage;

    let InputType: any = 'input';
    let prependCharacter = prepend;
    let appendCharacter = append;
    let inputLabel = label;

    if (
      !prependCharacter &&
      Object.values(CurrencyMask).includes(this.props.mask as CurrencyMask)
    ) {
      prependCharacter = '$';
    }

    if (
      !appendCharacter &&
      Object.values(PercentageMask).includes(this.props.mask as PercentageMask)
    ) {
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
        (this.props.mask &&
          maskEnum[this.props.mask as MaskChoice].placeholder) ||
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
    } as Attrs;

    if (this.props.mask) {
      const mask =
        ((this.props.mask &&
          maskEnum[this.props.mask as MaskChoice].mask) as Mask) || null;

      if (mask.type === 'Currency' && !onChange) {
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
      attrs.onBlur = (): void => {
        this.forceUpdate();
        this.toggleFocus();
      };
    }

    if (onChange) {
      const mask =
        this.props.mask && maskEnum[this.props.mask as MaskChoice].mask;

      attrs.onChange = (e): void =>
        onChange(
          name,
          sanitize && mask && mask.sanitize
            ? e.target.value.replace(mask.sanitize, '')
            : e.target.value,
        );
    }

    return (
      // The Context allows it to get the showRequiredError prop when in the CardShell
      // @ts-ignore
      <CardShellContext.Consumer>
        {({showRequiredError}): ReactNode => {
          const hasRequiredError = inputHasRequiredError({
            cardshellForceUnansweredQuestionError: Boolean(showRequiredError),
            showRequiredErrorFlagPresent: Boolean(showErrorState),
            requiredFlagPresent: Boolean(required),
            isEmpty,
          });

          const inputErrorState = isInputInErrorState({
            showInvalidity,
            errorFlag: Boolean(error),
            hasRequiredError: Boolean(hasRequiredError),
          });

          const showDescription = Boolean(description) && !inputErrorState;

          const containerClasses = classNames(
            {
              'uic--mcgonagall-input': true,
              'uic--position-relative': true,
              [`uic--input-append uic--input-append-${identifier}`]:
                appendCharacter && value.length > 0,
              [`uic--input-prepend uic--input-prepend-${identifier}`]: prependCharacter,
              'uic--empty': isEmpty,
              'uic--focus': this.state.isActive,
              'uic--error': inputErrorState,
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
                {/* @ts-ignore */}
                <InputType
                  data-cy={label}
                  aria-label={inputLabel}
                  autoComplete={
                    appendCharacter ? 'off' : autoComplete ? autoComplete : null
                  }
                  className="uic--position-relative"
                  onFocus={this.toggleFocus}
                  onBlur={this.toggleFocus}
                  ref={(input: RefObject<HTMLInputElement>): void => {
                    this.inputElement = input;
                    this.props.setRef && this.props.setRef(input);
                  }}
                  {...attrs}
                />
                <label className="uic--position-absolute">{inputLabel}</label>
              </div>
              {showDescription && (
                <div className="uic--description">{description}</div>
              )}
              {inputErrorState && (
                <div className="uic--validation-error">
                  {generateInputErrorMessage({
                    hasRequiredError,
                    errorMsg,
                    mask: this.props.mask as MaskChoice,
                  })}
                </div>
              )}
            </div>
          );
        }}
      </CardShellContext.Consumer>
    );
  }
}

export default Input;
