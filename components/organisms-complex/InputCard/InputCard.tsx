/** @module InputCard */
import React, {FC} from 'react';
import Input from '../../../components/atoms/Input/Input';
import {
  currencyMasks,
  percentageMasks,
} from '../../../components/atoms/Input/Input.masks';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';

type InputCardConfig = {
  /** A string or symbol to append to the end of the input. For example `%`. */
  append?: string;
  /** A string or symbol to pre-pend to the start of the input. For example `$`. */
  prepend?: string;
  /** The label representing the input field. */
  label: string;
  /** The name of the input field. */
  name: string;
  /** The description of the input field. Displayed separately to the label. */
  description?: string;
  /** The explanation of the input field. Displayed separately to the label. */
  explanation?: string;
  /** The type of input field. */
  type:
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
    | 'week'; //typeof Input.propTypes.type;
  /** The placeholder text of the input field. This is displayed if there's no value. */
  placeholder?: string;
  /** The current value of the input field.  */
  value?: string;
  /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
  pattern?: string;
  /** The max length of the input field value. */
  maxLength?: number;
  /** Allows you to select which input type is allowed in the field. */
  mask:
    | 'PhoneNumber'
    | 'SsnNumber'
    | 'Date'
    | 'Month'
    | 'Zip'
    | 'Ticker'
    | 'CommaSeparated'
    | 'Currency'
    | 'CurrencyAllowNegative'
    | 'Number'
    | 'PercentageWithDecimal'
    | 'SmallPercentageWithDecimal';
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
  /** Forces the input into an error state. */
  error?: boolean;
  /** Sanitizes the input when passed back by the onChange handler. */
  sanitize?: boolean;
};

type InputCardProps = Omit<QuestionCardProps, 'summary' | 'children'> & {
  /** Values to pass into input group */
  config: InputCardConfig;
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the selected value */
  answers?: string[];
  /** The handler to fire when a change happens. */
  onChange: Function;
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
};

/**
 * Displays the InputCard component.
 */
const InputCard: FC<InputCardProps> = ({
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
    : [config.value || ''];

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
