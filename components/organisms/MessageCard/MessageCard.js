import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Button from '../../Button/Button';
import '../../CardSummaries/CardSummaries.scss';
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
      {isIncompleteCollapsedCard ? (
        <Fragment>
          <p>Pick up where you left off</p>
          <Button variant="link" to={cardUrl}>
            Resume
          </Button>
        </Fragment>
      ) : (
        description && <p>{description}</p>
      )}
    </div>
  );

  return (
    <CardShell
      {...props}
      className={cardClass}
      hasError={isIncompleteCollapsedCard || hasError}
      isCollapsed={isCollapsed}
      summary={<div className="card-message-summary">{content}</div>}
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

MessageCard.defaultProps = {
  buttonText: 'Continue',
};
