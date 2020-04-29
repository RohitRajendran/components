/** @module BoxSelectCard */
import classNames from 'classnames';
import React, {FC} from 'react';
import BoxSelect from '../../../components/molecules/BoxSelect/BoxSelect';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import {getSelectedAnswerLabel} from '../../../components/organisms-complex/RadioButtonCard/RadioButtonCard';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';
import './BoxSelectCard.scss';

type BoxSelectCardOption = {
  /** The value of the select button, for example `yes` or `no`. */
  value: string;
  /** The label to appear on the box. */
  label?: string;
  /** The description to appear on the box. */
  description?: React.ReactNode;
  /** Disables the box */
  disabled?: boolean;
  /** The icon to display at the top of the card. */
  icon?: React.ReactNode;
  /** Shows check icon */
  showCheck?: boolean;
};

type BoxSelectCardConfig = {
  /** The name of the box group. Gets passed back when the onClick handler is triggered. */
  name: string;
  /** The select options to appear within the box. */
  options: BoxSelectCardOption[];
  /** The item that is currently selected. */
  value?: string;
};

type BoxSelectCardProps = QuestionCardProps & {
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers?: string[];
  /** Values to pass into  BoxSelect component. */
  config: BoxSelectCardConfig;
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
  /** The handler to fire when a change happens. */
  onChange: typeof BoxSelect.propTypes.onChange;
};

/**
 * Displays the BoxSelectCard component.
 */
const BoxSelectCard: FC<BoxSelectCardProps> = ({
  answers,
  className,
  config,
  editCard,
  onChange,
  shortTitle,
  title,
  ...props
}) => {
  const cardClass = classNames(
    {
      'uic--box-select-card': true,
    },
    className,
  );

  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      className={cardClass}
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
      <BoxSelect {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default BoxSelectCard;
