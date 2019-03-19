import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../CardSummaries/CardSummaries.scss';
import IncompleteSummary from '../../CardSummaries/IncompleteSummary/IncompleteSummary';
import '../Cards.scss';
import CardShell from '../CardShell/CardShell';
import './MessageCard.scss';

const MessageCard = ({
  beforeButton,
  className,
  description,
  hasError,
  isCollapsed,
  isLatestCard,
  title,
  featureImage,
  shortTitle,
  cardUrl,
  ...props
}) => {
  const cardClass = classNames(
    {
      'mcgonagall-message-card': true,
    },
    className
  );

  const isIncompleteCollapsedCard = isCollapsed && isLatestCard;

  const content = (
    <div className="card-titleset uic--text-center">
      {featureImage && <div className="card-feature-image">{featureImage}</div>}

      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );

  return (
    <CardShell
      {...props}
      className={cardClass}
      hasError={isIncompleteCollapsedCard || hasError}
      isCollapsed={isCollapsed}
      summary={
        isIncompleteCollapsedCard ? (
          <IncompleteSummary
            shortTitle={shortTitle}
            cardUrl={cardUrl}
            text="Pick up where you left off."
          />
        ) : (
          <div className="card-message-summary">{content}</div>
        )
      }
      beforeButton={beforeButton}
    >
      {content}
    </CardShell>
  );
};

export default MessageCard;

MessageCard.propTypes = {
  afterButton: PropTypes.node,
  beforeButton: PropTypes.node,
  buttonText: PropTypes.string,
  cardUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  featureImage: PropTypes.node,
  hasError: PropTypes.bool,
  hideButton: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isLatestCard: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

MessageCard.defaultProps = {
  buttonText: 'Continue',
};
