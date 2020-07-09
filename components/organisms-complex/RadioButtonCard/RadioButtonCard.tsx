/** @module RadioButtonCard */
import React, {FC} from 'react';
import {HandleChange} from '~components/templates/McGonagall/McGonagall';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import RadioButtons from '../../../components/molecules/RadioButtons/RadioButtons';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';

type RadioButtonsOptions = {
  /** The value of the radio button, for example `yes` or `no`. */
  value: string | boolean;
  /** The text that should appear next to the radio button. */
  label: string;
  /** Renders a followup input or message if the radio button is selected. */
  followup?: React.ReactNode;
  /** Displays a secondary label to the far right of the radio button.  */
  secondaryLabel?: string;
  /** Disables the option. */
  disabled?: boolean;
};

type RadioButtonsProps = {
  /** A string representing the name of the radio button group. For example `yesNo` or something similar. */
  name: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Determines if the entire group of radio buttons should be disabled or not. */
  disabled?: boolean;
  /** Renders the radio button group in a table. */
  table?: boolean;
  /** An array of objects containing options that should be rendered. */
  options: RadioButtonsOptions[];
  /** Determines if an input from the group is required or not for form validation. */
  required?: boolean;
  /** The current selected option in the radio button group. */
  value?: string | boolean;
  /** Change handler which takes in the `name` of the input and the `value` of the option which is currently selected. */
  onChange: HandleChange;
};

/**
 * Gets the label of a given value
 * @param options Array of options available
 * @param currValue The value to look for
 * @returns answer label
 */
export const getSelectedAnswerLabel = (
  options: {label?: string; value: string | boolean}[],
  currValue?: string | boolean,
): string | undefined => {
  const option = options.find((opt) => opt.value === currValue);
  if (option) {
    return option.label;
  }
};

export type RadioButtonCardProps = Omit<QuestionCardProps, 'summary'> & {
  /** Values to pass into radio button */
  config: Omit<RadioButtonsProps, 'onChange'>;
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers?: string[];
  /** The handler to fire when a change happens. */
  onChange: (fieldName: string, newValue: string) => void;
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
};

/**
 * Displays the RadioButtonCard component.
 */
const RadioButtonCard: FC<RadioButtonCardProps> = ({
  answers,
  config,
  editCard,
  onChange,
  shortTitle,
  title,
  ...props
}) => {
  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={
            answers || [
              getSelectedAnswerLabel(config.options, config.value) || '',
            ]
          }
          editCard={editCard}
          shortTitle={shortTitle}
        />
      }
    >
      <RadioButtons {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default RadioButtonCard;
