/** @module ActionBar */
import classNames from 'classnames';
import React, {FC} from 'react';
import './ActionBar.scss';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon';

type ActionBarProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** The handler which should run when the close button is pressed. */
  onClose?: React.MouseEventHandler;
  /** The handler which should run when the back button is pressed. */
  onBack?: React.MouseEventHandler;
  /** The title of the screen that appears in the middle of the action bar. */
  title?: string;
};

const ActionBar: FC<ActionBarProps> = ({
  className,
  style,
  onBack,
  onClose,
  title,
}) => {
  const containerClasses = classNames(
    {
      'uic--action-bar': true,
      'uic--d-flex': true,
      'uic--align-items-center': true,
      'uic--justify-content-between': true,
      'uic--position-fixed': true,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      {onBack ? (
        <button
          onClick={onBack}
          className="uic--action-bar--back"
          aria-label="back"
        >
          <CaretIcon direction="left" height="1.5rem" width="1.5rem" />
        </button>
      ) : (
        <span className="uic--action-bar--back" />
      )}
      {title ? <h1>{title}</h1> : <span />}
      {onClose ? (
        <button
          onClick={onClose}
          className="uic--action-bar--close"
          aria-label="close"
        >
          <CloseIcon height="2rem" width="2rem" />
        </button>
      ) : (
        <span className="uic--action-bar--close" />
      )}
    </div>
  );
};

export default ActionBar;
