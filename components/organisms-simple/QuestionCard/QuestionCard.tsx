/** @module QuestionCard */
import classNames from 'classnames';
import React, {FC, Fragment, PropsWithChildren, ReactNode} from 'react';
import Button from '~components/atoms/Button/Button';
import Cabinet from '~components/molecules/Cabinet/Cabinet.jsx';
import '~components/molecules/CardShell/Cards.scss';
import CardShell from '~components/molecules/CardShell/CardShell.jsx';
import IncompleteSummary from '~components/molecules/CardSummaries/IncompleteSummary/IncompleteSummary.jsx';
import {
  HandleChange,
  HandleSubmit,
} from '~components/templates/McGonagall/McGonagall';
import './QuestionCard.scss';

export type QuestionCardProps = PropsWithChildren<{
  /** Enables browser auto complete. */
  autoComplete?: boolean;
  /** Whether it should animate on mount */
  animate?: boolean;
  /** To display something after the Submit button. */
  afterButton?: ReactNode;
  /** To display something before the Submit button. */
  beforeButton?: ReactNode;
  /** Changes the text in the Submit button */
  buttonText?: string;
  /** Handler to cancel the changes. */
  cancelChanges: () => void;
  /** Applies additional class names to the button. */
  className?: string;
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture?: boolean;
  /** The card description. If given a raw string, the string is wrapped with a p tag. */
  description?: ReactNode;
  /** Forces the button to be disabled. */
  disabled?: boolean;
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard?: React.MouseEventHandler;
  /** Displays the error state of the card. */
  hasError?: boolean;
  /** If changes have been made */
  hasMadeChanges?: boolean;
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed?: boolean;
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary/ */
  isLatestCard?: boolean;
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching?: boolean;
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading?: boolean;
  /** Displays a Cabinet component beneath the question, suitable for displaying additional information about the card. */
  moreDetails?: {
    /** The contents of the cabinet. */
    cabinetContent: ReactNode;
    /** The header to display at the top of the cabinet. */
    header: string;
    /** Determines if the cabinet is visible when the page is printed or not. */
    visibleInPrint?: boolean;
    /** Adds a label to open the cabinet. */
    label: string;
  };
  /** The handler to fire when a change happens. */
  onChange?: HandleChange;
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: HandleSubmit;
  /** Output defaults to fallback to on continue if an output is empty. The key should be the output name and the value should be the default value */
  outputDefaults?: {};
  /** Shorter title to be used with the card summary. */
  shortTitle: ReactNode;
  /** The summary view that should display when the card is collapsed.
   * If it is the latest step and the card is collapsed, the incomplete summary component will be displayed instead */
  summary?: ReactNode;
  /** The index of this card in the flow, used for animation purposes */
  stepIndex?: number;
  /** The title of the card. */
  title: ReactNode;
}>;

const QuestionCard: FC<QuestionCardProps> = ({
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
    className,
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
          {hasMadeChanges && showEditWarning && (
            <p className="uic--warning-message">
              Note: Changing your answer to this question will require you to
              answer additional questions.
            </p>
          )}
          {beforeButton}
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
