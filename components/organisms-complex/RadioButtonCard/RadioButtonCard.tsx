/** @module RadioButtonCard */
import React, {FC} from 'react';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import RadioButtons from '../../../components/molecules/RadioButtons/RadioButtons';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';

type RadioButtonCardOption = {
  /** The value of the button. */
  value: string | boolean;
  /** The label of the button. */
  label: string;
  /** Optional followup input JSX. */
  followup?: React.ReactNode;
  /** Label to appear to the right of the selection. */
  secondaryLabel?: string;
  /** Disables the option. */
  disabled?: boolean;
};

type RadioButtonCardConfig = {
  /** A string representing the name of the radio button group. For example `yesNo` or something similar. */
  name: string;
  /** Renders the radio button group in a table. */
  table?: boolean;
  /** The current selected option in the radio button group. */
  value?: string | boolean;
  /** An array of objects containing options that should be rendered. */
  options: RadioButtonCardOption[];
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

type RadioButtonCardProps = QuestionCardProps & {
  /** Values to pass into radio button */
  config: RadioButtonCardConfig;
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers?: string[];
  /** The handler to fire when a change happens. */
  onChange: typeof RadioButtons.propTypes.onChange;
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
          shortTitle={shortTitle || title}
        />
      }
    >
      <RadioButtons {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default RadioButtonCard;
