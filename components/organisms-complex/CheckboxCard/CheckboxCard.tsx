/** @module CheckboxCard */
import React, {FC} from 'react';
import {HandleChange} from '~components/templates/McGonagall/McGonagall';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import Checkboxes from '../../../components/molecules/Checkboxes/Checkboxes';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';

type CheckboxCardOption = {
  /** The value of the checkbox, for example `yes` or `no`. */
  value: string;
  /** The text that should appear next to the checkbox. */
  label: string;
  /** Disables the option. */
  disabled?: boolean;
  /** Renders a followup input or message if the checkbox is selected. */
  followup?: React.ReactNode;
  /** Displays a secondary label to the far right of the checkbox.  */
  secondaryLabel?: string;
};

/**
 * Gets the label of a given value
 * @param options Array of options available
 * @param currValue The value to look for
 * @returns answer labels
 */
const getSelectedAnswerLabel = (
  options: CheckboxCardOption[],
  currValue: string[],
): string[] => {
  return currValue.map((val) => {
    const option = options.find((opt) => opt.value === val);

    if (option) {
      return option.label;
    } else {
      return '';
    }
  });
};

type CheckboxCardConfig = {
  /** A string representing the name of the checkbox group. For example `yesNo` or something similar. */
  name: string;
  /** Renders the checkbox group in a table. */
  table?: boolean;
  /** The current selected option in the checkbox group. */
  value?: string[];
  /** An array of objects containing options that should be rendered. These options are explained below. */
  options: CheckboxCardOption[];
};

type CheckboxCardProps = Omit<QuestionCardProps, 'summary'> & {
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers?: string[];
  /** Values to pass into checkbox group */
  config: CheckboxCardConfig;
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
  /** The handler to fire when a change happens. */
  onChange: HandleChange;
};

/**
 * Displays the CheckboxCard component.
 */
const CheckboxCard: FC<CheckboxCardProps> = ({
  answers,
  editCard,
  onChange,
  config,
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
            answers ||
            getSelectedAnswerLabel(config.options, config.value || [])
          }
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <Checkboxes {...config} onChange={onChange} />
    </QuestionCard>
  );
};

export default CheckboxCard;
