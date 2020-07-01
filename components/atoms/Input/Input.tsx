/** @module Input */
import classNames from 'classnames';
import React, {FC, useReducer, Fragment} from 'react';
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
import {useState, useRef, useCallback} from '@storybook/addons';
import {boolean} from '@storybook/addon-knobs';

enum MaskEnum {
  ApexAccount = 'ApexAccount',
  PhoneNumber = 'PhoneNumber',
  SsnNumber = 'SsnNumber',
  Date = 'Date',
  Month = 'Month',
  Zip = 'Zip',
  Ticker = 'Ticker',
  CommaSeparated = 'CommaSeparated',
  Currency = 'Currency',
  CurrencyDecimal = 'CurrencyDecimal',
  CurrencyAllowNegative = 'CurrencyAllowNegative',
  Number = 'Number',
  PercentageWithoutDecimal = 'PercentageWithoutDecimal',
  PercentageWithDecimal = 'PercentageWithDecimal',
  PercentageWithDecimalAllowNegative = 'PercentageWithDecimalAllowNegative',
  SmallPercentageWithDecimal = 'SmallPercentageWithDecimal',
}

enum InputEnum {
  Date = 'date',
  DateTimeLocal = 'datetime-local',
  Email = 'email',
  File = 'file',
  Hidden = 'hidden',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Search = 'search',
  Telephone = 'tel',
  Text = 'text',
  Time = 'time',
  URL = 'url',
  Week = 'week',
}

type MaskType = {
  mask: RegExp[] | Function;
  regex?: RegExp;
  isValid?: (val: string) => boolean;
  validationErrorMsg?: string;
  sanitize?: RegExp;
  type?: string;
  placeholder?: string;
  pipe?: Function;
} & Pick<InputProps, 'isValid'>;

type AttrsType = {
  type?: InputEnum;
  placeholder: string | null;
  guide?: boolean;
  pipe?: Function;
  mask?: Function | RegExp[];
  keepCharPositions?: boolean;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent) => void;
} & Pick<
  InputProps,
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
  | 'name'
>;

type InputProps = {
  /** The label representing the input field. */
  label: string;
  /** The name of the input field. */
  name: string;
  /** A string or symbol to append to the end of the input. For example `%`. Automatically applied for percentage masks. */
  append?: string;
  /** Determines the autoComplete type on the input. */
  autoComplete?: string;
  /** A string or symbol to pre-pend to the start of the input. For example `$`. Automatically applied for currency masks. */
  prepend?: string;
  /** The description of the input field. Displayed separately to the label. */
  description?: string;
  /** Displays explanation text on input focus. */
  explanation?: string;
  /** The type of input field. */
  type?: InputEnum;
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
  mask?: MaskEnum;
  /** Handle which is run whenever a user makes a key press within the input. */
  onKeyPress?: () => void;
  /** Handler which is run whenever there's a change to the input. Passes back the name and value of input. */
  onChange?: (name: string, value: string) => void;
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
  setRef?: (ref: React.RefObject<HTMLInputElement>) => void;
  /** Hides the validation message under the defined conditions. */
  hideValidity?: () => boolean;
  /** Validates the input based on the provided logic. */
  isValid?: (val?: string) => boolean;
  /** Forces the input into an error state. */
  error?: boolean;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Sanitizes the input when passed back by the onChange handler. */
  sanitize?: boolean;
  /** Displays error state for incomplete required fields */
  showRequiredError?: boolean;
  /** Optional inline styles. */
  style?: Record<string, string>;
  /** Custom validation function that the user wants the input validated against */
  validate: (val?: string) => string;
};

type InputErrorMessageProps =
  | {
      hasRequiredError: boolean;
      errorMsg: string;
      mask: undefined;
    }
  | {
      hasRequiredError?: boolean;
      errorMsg?: string;
      mask: MaskEnum;
    };

/** Gets the deepest input element for validation.
 * @param {object} startObject - The first input.
 * @returns {object} - The deepest input field.
 */
export const getDeepestInputElement = (
  startObject: Record<string, any>,
): object => {
  if (!startObject.inputElement) {
    return startObject;
  }
  return getDeepestInputElement(startObject.inputElement);
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
}: Record<string, boolean>): boolean =>
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
}: Record<string, boolean>): boolean =>
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
}: InputErrorMessageProps): string => {
  if (hasRequiredError) {
    return 'Required Field';
  } else if (errorMsg) {
    return errorMsg;
  }

  return maskEnum[mask].validationErrorMsg;
};

const Input: FC<InputProps> = ({
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
  showRequiredError,
  isValid = () => true,
  validate = () => '',
  hideValidity = () => true,
  mask,
  setRef,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputElement, setInputElement] = useState<React.RefObject<
    HTMLInputElement
  > | null>(null);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const tooltipNode = useRef<HTMLDivElement | null>(null);
  const inputNode = useRef<HTMLDivElement | null>(null);
  const mainEle = useRef<HTMLDivElement | null>(null);

  /** Handles the focus toggling in cases where the default HTML behavior doesn't cut it.
   * @returns {undefined}
   */
  const toggleFocus = useCallback(() => {
    // Sets the height of the tooltip if applicable.
    if (tooltipNode?.current && inputNode.current) {
      const newHeight = !isActive ? tooltipNode.current.scrollHeight : 0;

      setHeight(newHeight);

      const isVisible = isInViewport(
        tooltipNode.current,
        tooltipNode.current.scrollHeight,
      );

      // If the tooltip element is not in view it will automatically scroll the user to it.
      if (!isVisible && isWindowDefined()) {
        window.scrollTo({
          top: inputNode.current.offsetTop - tooltipNode.current.scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    }

    setIsActive(!isActive);
  }, []);

  /**
   * Determines if the input is valid or not.
   * @return {boolean} - Returns true or false depending on the validity.
   */
  const inputIsValid = useCallback((): boolean => {
    const objectToPass = {...mainEle, inputElement};
    const deepest = getDeepestInputElement(objectToPass);
    const isActive = isDocumentDefined() && deepest === document.activeElement;
    const isEmpty = value === '' || typeof value === 'undefined';
    const maskValidation =
      mask && ((maskEnum[mask] as unknown) as MaskType).isValid
        ? maskEnum[mask].isValid(value)
        : true;
    setErrorMessage(validate(value));

    return (
      Boolean(errorMessage) ||
      (!(isValid(value) || maskValidation) &&
        !(hideValidity() || isActive) &&
        isEmpty)
    );
  }, []);

  /* We use an identifier here to apply pseudo inline styles to the
      input. This is done so prepended and appended values can get pushed
      into the CSS attr property. This allows us to (hopefully) target
      this specific input every time instead of applying it to all inputs on the page. */
  const identifier = Math.round(Math.random() * 10000000);

  const showInvalidity = !disabled ? inputIsValid() : false;
  const isEmpty = (value && value.length < 1) || !value;
  const errorMsg = validationErrorMsg || errorMessage;

  let InputType: string | typeof TextareaAutosize = 'input';
  let prependCharacter = prepend;
  let appendCharacter = append;
  let inputLabel = label;

  if (!prependCharacter && mask && currencyMasks.includes(mask)) {
    prependCharacter = '$';
  }

  if (!appendCharacter && mask && percentageMasks.includes(mask)) {
    appendCharacter = '%';
  }

  if (multiline) {
    InputType = TextareaAutosize;
  } else if (mask) {
    InputType = MaskedInput;
  }

  if (label && !required && !disableOptionalFlag) {
    inputLabel = `${label} (Optional)`;
  }

  const attrs: AttrsType = {
    type,
    name,
    placeholder:
      `${placeholder || ''}${appendCharacter || ''}` ||
      (mask && ((maskEnum[mask] as unknown) as MaskType).placeholder) ||
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

  if (mask) {
    const maskConfig = ((mask && maskEnum[mask].mask) as MaskType) || null;

    if (maskConfig.type === MaskTypes.currency && !onChange) {
      throw new Error(
        'CurrencyMasks require explicit onChange handler for IE11',
      );
    }

    attrs.mask = maskConfig.mask;
    attrs.guide = false;

    if (maskConfig.pipe) {
      attrs.pipe = maskConfig.pipe;
      attrs.keepCharPositions = true;
    }
  }

  if (validateOnBlur) {
    attrs.onBlur = () => {
      forceUpdate();
      toggleFocus();
    };
  }

  if (onChange) {
    const maskConfig = (mask && maskEnum[mask].mask) as MaskType;

    attrs.onChange = (e: React.ChangeEvent) =>
      onChange(
        name,
        sanitize && mask && maskConfig.sanitize
          ? (e.target as HTMLInputElement).value.replace(
              maskConfig.sanitize,
              '',
            )
          : (e.target as HTMLInputElement).value,
      );
  }

  return (
    <div ref={mainEle}>
      {/* The Context allows it to get the showRequiredError prop when in the CardShell */}
      {/* @ts-ignore */}
      <CardShellContext.Consumer>
        {/* @ts-ignore */}
        {({cardshellForceUnansweredQuestionError}) => {
          const hasRequiredError = inputHasRequiredError({
            cardshellForceUnansweredQuestionError: Boolean(
              cardshellForceUnansweredQuestionError,
            ),
            showRequiredErrorFlagPresent: Boolean(showRequiredError),
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
                appendCharacter && [value || [true]].length > 0,
              [`uic--input-prepend uic--input-prepend-${identifier}`]: prependCharacter,
              'uic--empty': isEmpty,
              'uic--focus': isActive,
              'uic--error': inputErrorState,
              'uic--disabled': disabled,
              'uic--mcgonagall-input__tooltip-present': height !== 0,
            },
            className,
          );

          const tooltipClasses = classNames({
            'uic--mcgonagall-input__tooltip': true,
            'uic--position-absolute': true,
            'uic--mcgonagall-input__tooltip-hidden': height === 0,
          });

          return (
            <div
              className={containerClasses}
              style={style}
              data-value={value}
              ref={inputNode}
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
                    ref={tooltipNode}
                    className={tooltipClasses}
                    style={{top: `-${height}px`}}
                  >
                    {explanation}
                  </div>
                )}
                {/* @ts-ignore */}
                <InputType
                  type="text"
                  data-cy={label}
                  aria-label={inputLabel}
                  autoComplete={
                    appendCharacter ? 'off' : autoComplete ? autoComplete : null
                  }
                  className="uic--position-relative"
                  onFocus={toggleFocus}
                  onBlur={toggleFocus}
                  ref={(input: React.RefObject<HTMLInputElement>) => {
                    setInputElement(input);
                    setRef && setRef(input);
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
                    mask,
                  })}
                </div>
              )}
            </div>
          );
        }}
      </CardShellContext.Consumer>
    </div>
  );
};

// Input.defaultProps = {
//   type: 'text',
//   value: '',
//   minRows: 3,
// };

export default Input;
