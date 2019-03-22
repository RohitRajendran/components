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
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button. */
  buttonText: PropTypes.string,
  /** The url for the current step, used for the edit link in the summary. */
  cardUrl: PropTypes.string.isRequired,
  /** Additional classes to apply to the container. */
  className: PropTypes.string,
  /** The cards description. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Forces the button to be disabled. */
  disabled: PropTypes.bool,
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
