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
      'uic--mcgonagall-message-card': true,
    },
    className
  );

  const isIncompleteCollapsedCard = isCollapsed && isLatestCard;

  const content = (
    <div className="uic--card-titleset uic--text-center">
      {featureImage && (
        <div className="uic--card-feature-image">{featureImage}</div>
      )}

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
      summary={<div className="uic--card-message-summary">{content}</div>}
    >
      {content}
    </CardShell>
  );
};

MessageCard.propTypes = {
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button. */
  buttonText: PropTypes.string,
  /** Additional class names to apply to the button. */
  className: PropTypes.string,
  /** The cards description. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Forces the button to be disabled. */
  disabled: PropTypes.bool,
  /** Applies additional class names to the button. */
  editCard: PropTypes.func,
  /** Use to display a feature image or other content at the top of the card. */
  featureImage: PropTypes.node,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Hides the button. */
  hideButton: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary. */
  isLatestCard: PropTypes.bool,
  /** Shows a loading indicator in the button. */
  loading: PropTypes.bool,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

MessageCard.defaultProps = {
  buttonText: 'Continue',
};

export default MessageCard;
