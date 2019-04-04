/** @module InputCard */
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import Input from '~components/atoms/Input/Input';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';
import {currencyMasks, percentageMasks} from '../../atoms/Input/Input';

/** Displays the InputCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the InputCard component.
 */
const InputCard = ({
  answers,
  editCard,
  config,
  onChange,
  shortTitle,
  title,
  ...props
}) => {
  // Automatically prepend/append depending on type of mask if answers is not passed through
  const answer = answers
    ? answers
    : currencyMasks.includes(config.mask)
    ? [`$${config.value}`]
    : percentageMasks.includes(config.mask)
    ? [`${config.value}%`]
    : [config.value];

  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={answer}
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <Input {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default InputCard;

InputCard.propTypes = {
  /** Values to pass into input group */
  config: PropTypes.shape({
    /** A string or symbol to append to the end of the input. For example `%`. */
    append: PropTypes.string,
    /** A string or symbol to pre-pend to the start of the input. For example `$`. */
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
    /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
    pattern: PropTypes.string,
    /** The max length of the input field value. */
    maxLength: PropTypes.number,
    /** Allows you to select which input type is allowed in the field. */
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
    /** Sets the ref to the input. */
    setRef: PropTypes.func,
    /** Hides the validation message under the defined conditions. */
    hideValidity: PropTypes.func,
    /** Validates the input based on the provided logic. */
    isValid: PropTypes.func,
    /** Forces the input into an error state. */
    error: PropTypes.bool,
    /** Sanitizes the input when passed back by the onChange handler. */
    sanitize: PropTypes.bool,
  }),
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers: PropTypes.arrayOf(PropTypes.string),
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func,
  /** Additional class names to apply to the card. */
  className: PropTypes.string,
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture: PropTypes.bool,
  /** The card description. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Forces the disabled state of the button. */
  disabled: PropTypes.bool,
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: PropTypes.func,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary. */
  isLatestCard: PropTypes.bool,
  /** Shows a loading indicator in the button. */
  loading: PropTypes.bool,
  /** Support passing in JSX for the more detail area under the description. Typically, this should be link that opens up a Hogwarts cabinet. */
  moreDetail: PropTypes.node,
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func.isRequired,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

InputCard.defaultProps = {
  buttonText: 'Continue',
};
