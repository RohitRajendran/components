/** @module RankingCard */
import PropTypes from 'prop-types';
import React from 'react';
import Ranking from '~components/atoms/Ranking/Ranking';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
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
      {/** Creating copy of config.items to prevent pass by reference causing issues */}
      <Ranking {...config} items={[...config.items]} onChange={onChange} />
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
  /** Whether it should animate on mount */
  animate: PropTypes.bool,
  /** Enables browser auto complete. */
  autoComplete: PropTypes.bool,
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func,
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
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching: PropTypes.bool,
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading: PropTypes.bool,
  /** Displays a Cabinet component beneath the question, suitable for displaying additional information about the card. */
  moreDetails: PropTypes.shape({
    /** The contents of the cabinet. */
    cabinetContent: PropTypes.node.isRequired,
    /** The header to display at the top of the cabinet. */
    header: PropTypes.string.isRequired,
    /** Determines if the cabinet is visible when the page is printed or not. */
    visibleInPrint: PropTypes.bool,
    /** Adds a label to open the cabinet. */
    label: PropTypes.string.isRequired,
  }),
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func.isRequired,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Output defaults to fallback to on continue if an output is empty. The key should be the output name and the value should be the default value */
  outputDefaults: PropTypes.shape({}),
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The index of this card in the flow, used for animation purposes */
  stepIndex: PropTypes.number,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
