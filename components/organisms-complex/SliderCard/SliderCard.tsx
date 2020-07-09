/** @module SliderCard */
import classNames from 'classnames';
import React, {FC} from 'react';
import {HandleChange} from '~components/templates/McGonagall/McGonagall';
import Slider from '../../../components/atoms/Slider/Slider';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';

type SliderCardConfig = {
  /** A string representing the name of the select button group. For example `yesNo` or something similar. */
  name: string;
  /** The selected slider position. */
  value: number;
  /** Data to display inside of the tooltip. */
  tooltip?: React.ReactNode;
  /** Text to display to the left of the slider. */
  leftAnnotate?: React.ReactNode;
  /** Text to display to the right of the slider. */
  rightAnnotate?: React.ReactNode;
  /** Shows a ghost dot on the slider, set the position between 1 and 10. */
  tooltipStickyPosition?: number;
  /** Determines which variant to set the slider to. */
  tooltipStickyVariant?: 'green' | 'purple' | 'orange'; //typeof PureSlider.propTypes.tooltipStickyVariant;
};

type SliderCardProps = Omit<QuestionCardProps, 'summary' | 'children'> & {
  /** Values to pass into select button */
  config: SliderCardConfig;
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers?: string[];
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
  /** The handler to fire when a change happens. */
  onChange: HandleChange;
};

/**
 * Displays the SliderCard component.
 */
const SliderCard: FC<SliderCardProps> = ({
  answers,
  className,
  editCard,
  onChange,
  config,
  shortTitle,
  title,
  ...props
}) => {
  const cardClass = classNames(
    {
      'mcg-radio-button-card': true,
    },
    className,
  );

  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      className={cardClass}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={answers || [config.value.toString()]}
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <Slider {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default SliderCard;
