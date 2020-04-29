/** @module RankingCard */
import React, {FC} from 'react';
import Ranking from '../../../components/atoms/Ranking/Ranking';
import SimpleSummary from '../../../components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import QuestionCard, {
  QuestionCardProps,
} from '../../../components/organisms-simple/QuestionCard/QuestionCard';

type RankingCardConfig = {
  /** A string representing the name of the select button group. For example `yesNo` or something similar. */
  name: string;
  /** The current selected option in the select button group. */
  items: {
    /** The option label. */
    label: string;
    /** The unique id of the option. */
    id: string;
    /** The secondary label to appear to the right of the item. *I*/
    secondaryLabel?: string;
    /** Determines if the item in the list should be movable or not. */
    movable?: boolean;
    /** Set to true if this is the only item in the list which is movable, and you'd like to always display the controls. */
    focus?: boolean;
  }[];
};

type RankingCardProps = QuestionCardProps & {
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers?: string[];
  /** Values to pass into Ranking component. */
  config: RankingCardConfig;
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
  /** The handler to fire when a change happens. */
  onChange: typeof Ranking.propTypes.onChange;
};

/**
 * Displays the RankingCard component.
 */
const RankingCard: FC<RankingCardProps> = ({
  answers,
  editCard,
  onChange,
  config,
  shortTitle,
  title,
  ...props
}) => {
  const determineAnswers = (): string[] => {
    const focus = config.items.some((item) => item.focus);

    if (focus) {
      return [(config.items.findIndex((item) => item.focus) + 1).toString()];
    } else {
      return config.items.map((item, index) => `${index + 1}. ${item.label}`);
    }
  };

  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={answers || determineAnswers()}
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      {/** Creating copy of config.items to prevent pass by reference causing issues */}
      <Ranking {...config} items={[...config.items]} onChange={onChange} />
    </QuestionCard>
  );
};

export default RankingCard;
