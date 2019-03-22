/** @module MessageCard */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Button from '~components/atoms/Button/Button';
import CardShell from '~components/molecules/CardShell/CardShell';
import '~components/molecules/CardShell/Cards.scss';
import '~components/molecules/CardSummaries/CardSummaries.scss';
import './MessageCard.scss';

const MessageCard = ({
  beforeButton,
  className,
  description,
  editCard,
  featureImage,
  hasError,
  isCollapsed,
  isLatestCard,
  title,
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
          <Button variant="link" onClick={editCard}>
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
      beforeButton={beforeButton}
      className={cardClass}
      hasError={isIncompleteCollapsedCard || hasError}
      isCollapsed={isCollapsed}
      summary={<div className="card-message-summary">{content}</div>}
    >
      {content}
    </CardShell>
  );
};

MessageCard.propTypes = {
  afterButton: PropTypes.node,
  beforeButton: PropTypes.node,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  editCard: PropTypes.func,
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

export default MessageCard;
