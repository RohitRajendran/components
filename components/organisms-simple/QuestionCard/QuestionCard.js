/** @module QuestionCard */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Button from '~components/atoms/Button/Button';
import Cabinet from '~components/molecules/Cabinet/Cabinet';
import '~components/molecules/CardShell/Cards.scss';
import CardShell from '~components/molecules/CardShell/CardShell';
import IncompleteSummary from '~components/molecules/CardSummaries/IncompleteSummary/IncompleteSummary';
import './QuestionCard.scss';

const QuestionCard = ({
  afterButton,
  beforeButton,
  buttonText,
  cancelChanges,
  children,
  className,
  clearFuture,
  description,
  editCard,
  hasError,
  hasMadeChanges,
  isCollapsed,
  isLatestCard,
  moreDetails,
  shortTitle,
  summary,
  title,
  ...props
}) => {
  const cardClass = classNames(
    {
      'uic--mcgonagall-question-card': true,
    },
    className
  );

  const cancelButtonClass = classNames({
    'uic--card-cancel': afterButton,
    'uic--d-block': true,
  });

  const isEditing = !isLatestCard && !isCollapsed;
  const showEditWarning = clearFuture && isEditing;
  const isIncompleteCollapsedCard = isCollapsed && isLatestCard;
  const descriptionNode =
    typeof description === 'string' ? <p>{description}</p> : description;

  return (
    <CardShell
      {...props}
      className={cardClass}
      hasError={isIncompleteCollapsedCard || hasError}
      isCollapsed={isCollapsed}
      isLatestCard={isLatestCard}
      summary={
        isIncompleteCollapsedCard ? (
          <IncompleteSummary shortTitle={shortTitle} editCard={editCard} />
        ) : (
          summary
        )
      }
      beforeButton={
        <Fragment>
          {beforeButton}
          {hasMadeChanges && showEditWarning && (
            <p className="uic--warning-message">
              Note: The answer to this question has an impact on subsequent
              questions. If you change this answer, you will have to revisit the
              remaining questions.
            </p>
          )}
        </Fragment>
      }
      afterButton={
        <Fragment>
          {afterButton}
          {!isLatestCard && (
            <Button
              variant="link"
              onClick={cancelChanges}
              className={cancelButtonClass}
            >
              Cancel
            </Button>
          )}
        </Fragment>
      }
      buttonText={hasMadeChanges && isEditing ? 'Save Changes' : buttonText}
      hideButton={!hasMadeChanges && isEditing}
    >
      <div className="uic--card-titleset">
        <h2>{title}</h2>
        {descriptionNode}

        {moreDetails && (
          <div className="uic--card-more-detail">
            <Cabinet
              labelStyle="light"
              label={moreDetails.label}
              visibleInPrint={moreDetails.visibleInPrint}
              header={moreDetails.header}
              handleWithState
            >
              {moreDetails.cabinetContent}
            </Cabinet>
          </div>
        )}
        <hr />
      </div>

      {children}
    </CardShell>
  );
};

export default QuestionCard;

QuestionCard.propTypes = {
  /** Enables browser auto complete. */
  autoComplete: PropTypes.bool,
  /** Whether it should animate on mount */
  animate: PropTypes.bool,
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func,
  /** HTML element that should appear within the card when not collapsed */
  children: PropTypes.node.isRequired,
  /** Applies additional class names to the button. */
  className: PropTypes.string,
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture: PropTypes.bool,
  /** The card description. If given a raw string, the string is wrapped with a p tag. */
  description: PropTypes.node,
  /** Forces the button to be disabled. */
  disabled: PropTypes.bool,
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: PropTypes.func,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** If changes have been made */
  hasMadeChanges: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary/ */
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
  onChange: PropTypes.func,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Output defaults to fallback to on continue if an output is empty. The key should be the output name and the value should be the default value */
  outputDefaults: PropTypes.shape({}),
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.node.isRequired,
  /** The summary view that should display when the card is collapsed.
   * If it is the latest step and the card is collapsed, the incomplete summary component will be displayed instead */
  summary: PropTypes.node,
  /** The index of this card in the flow, used for animation purposes */
  stepIndex: PropTypes.number,
  /** The title of the card. */
  title: PropTypes.node.isRequired,
};
