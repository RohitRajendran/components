/** @module MessageCard */
import classNames from 'classnames';
import React, {FC, Fragment} from 'react';
import Button from '~components/atoms/Button/Button';
import '~components/molecules/CardShell/Cards.scss';
import CardShell from '~components/molecules/CardShell/CardShell';
import '~components/molecules/CardSummaries/CardSummaries.scss';
import {HandleSubmit} from '~components/templates/McGonagall/McGonagall';
import './MessageCard.scss';

type MessageCardProps = {
  /** Enables browser auto complete. */
  autoComplete?: boolean;
  /** Whether it should animate on mount */
  animate?: boolean;
  /** To display something after the Submit button. */
  afterButton?: React.ReactNode;
  /** To display something before the Submit button. */
  beforeButton?: React.ReactNode;
  /** Changes the text in the Submit button. */
  buttonText?: string;
  /** Additional class names to apply to the button. */
  className?: string;
  /** The cards description. */
  description?: React.ReactNode;
  /** Forces the button to be disabled. */
  disabled?: boolean;
  /** Applies additional class names to the button. */
  editCard: React.MouseEventHandler;
  /** Use to display a feature image or other content at the top of the card. */
  featureImage?: React.ReactNode;
  /** Displays the error state of the card. */
  hasError?: boolean;
  /** Hides the button. */
  hideButton?: boolean;
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed?: boolean;
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary. */
  isLatestCard?: boolean;
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching?: boolean;
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading?: boolean;
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: HandleSubmit;
  /** The index of this card in the flow, used for animation purposes */
  stepIndex?: number;
  /** The title of the card. */
  title: React.ReactNode;
};

const MessageCard: FC<MessageCardProps> = ({
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
    className,
  );

  const descriptionNode =
    typeof description === 'string' ? <p>{description}</p> : description;

  const isIncompleteCollapsedCard = isCollapsed && isLatestCard;

  const content = (
    <div className="uic--card-titleset uic--text-center">
      {featureImage && (
        <div className="uic--card-feature-image" data-cy={title}>
          {featureImage}
        </div>
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
        descriptionNode
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

export default MessageCard;
