import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import IncompleteSummary from '~components/molecules/CardSummaries/IncompleteSummary/IncompleteSummary';
import CardShell from '~components/molecules/CardShell/CardShell';

import '~components/molecules/CardShell/Cards.scss';
import './QuestionCard.scss';

const QuestionCard = ({
  beforeButton,
  cardUrl,
  children,
  className,
  clearFuture,
  description,
  hasError,
  isCollapsed,
  isLatestCard,
  moreDetail,
  shortTitle,
  summary,
  title,
  ...props
}) => {
  const cardClass = classNames(
    {
      'mcgonagall-question-card': true,
    },
    className
  );

  const showEditWarning = clearFuture && !isLatestCard && !isCollapsed;
  const isIncompleteCollapsedCard = isCollapsed && isLatestCard;

  return (
    <CardShell
      {...props}
      className={cardClass}
      hasError={isIncompleteCollapsedCard || hasError}
      isCollapsed={isCollapsed}
      isLatestCard={isLatestCard}
      summary={
        isIncompleteCollapsedCard ? (
          <IncompleteSummary shortTitle={shortTitle} cardUrl={cardUrl} />
        ) : (
          summary
        )
      }
      beforeButton={
        <Fragment>
          {beforeButton}
          {showEditWarning && (
            <p className="warning-message">
              Note: The answer to this question has an impact on subsequent
              questions. If you change this answer, all further progress will be
              lost.
            </p>
          )}
        </Fragment>
      }
    >
      <div className="card-titleset">
        <h2>{title}</h2>
        {description && <p>{description}</p>}

        {moreDetail && <div className="card-more-detail">{moreDetail}</div>}

        <hr className="margin-top-4" />
      </div>

      {children}
    </CardShell>
  );
};

export default QuestionCard;

QuestionCard.propTypes = {
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the submit button/ */
  buttonText: PropTypes.string,
  /** TML element that should appear within the card when not collapsed. */
  children: PropTypes.node.isRequired,
  /** Applies additional class names to the button. */
  className: PropTypes.string,
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture: PropTypes.bool,
  /** The card description. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Forces the button to be disabled. */
  disabled: PropTypes.bool,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Hides the button. */
  hideButton: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary/ */
  isLatestCard: PropTypes.bool,
  /** Shows a loading indicator in the button. */
  loading: PropTypes.bool,
  /** The url for the current step, used for the edit link in the summary. */
  cardUrl: PropTypes.string.isRequired,
  /** Support passing in JSX for the more detail area under the description. Typically, this should be link that opens up a Hogwart cabinet. */
  moreDetail: PropTypes.node,
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The summary view that should display when the card is collapsed.
   * If it is the latest step and the card is collapsed, the incomplete summary component will be displayed instead */
  summary: PropTypes.node,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

QuestionCard.defaultProps = {
  buttonText: 'Continue',
};
