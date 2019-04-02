/** @module RankingCard */
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import Ranking from '~components/atoms/Ranking/Ranking';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';

/** Displays the RankingCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the RankingCard component.
 */
const RankingCard = ({
  answers,
  editCard,
  onChange,
  config,
  shortTitle,
  title,
  ...props
}) => {
  const determineAnswers = () => {
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
      <Ranking {...config} onChange={onChange} />
    </QuestionCard>
  );
};

export default RankingCard;

RankingCard.propTypes = {
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers: PropTypes.arrayOf(PropTypes.string),
  /** Values to pass into Ranking component. */
  config: PropTypes.shape({
    /** A string representing the name of the select button group. For example `yesNo` or something similar. */
    name: PropTypes.string.isRequired,
    /** The current selected option in the select button group. */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** The option label. */
        label: PropTypes.string.isRequired,
        /** The unique id of the option. */
        id: PropTypes.string.isRequired,
        /** The secondary label to appear to the right of the item. *I*/
        secondaryLabel: PropTypes.string,
        /** Determines if the item in the list should be movable or not. */
        movable: PropTypes.bool,
        /** Set to true if this is the only item in the list which is movable, and you'd like to always display the controls. */
        focus: PropTypes.bool,
      })
    ),
  }),
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func.isRequired,
  /** Additional class names to apply to the button. */
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

RankingCard.defaultProps = {
  buttonText: 'Continue',
};
