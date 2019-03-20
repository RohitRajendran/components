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
  afterButton: PropTypes.node,
  beforeButton: PropTypes.node,
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clearFuture: PropTypes.bool,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  hideButton: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isLatestCard: PropTypes.bool,
  loading: PropTypes.bool,
  cardUrl: PropTypes.string.isRequired,
  moreDetail: PropTypes.node,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  summary: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

QuestionCard.defaultProps = {
  buttonText: 'Continue',
};
