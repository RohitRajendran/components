/** @module InterstitialScreen */
import classNames from 'classnames';
import React, {FC} from 'react';
import './InterstitialScreen.scss';

type InterstitialScreenProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** The title of the interstitial. */
  title: string;
  /** The description of the interstitial. */
  description: React.ReactNode | string;
  /** The icon thumbnail to appear above the interstitial. */
  Icon?: React.ComponentType;
};

/** Renders a full page interstitial screen. */
const InterstitialScreen: FC<InterstitialScreenProps> = ({
  className,
  children,
  description,
  Icon,
  style,
  title,
}) => {
  const containerClasses = classNames(
    {
      'uic--interstitial-screen': true,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <div className="uic--interstitial-screen__inner uic--d-flex uic--flex-column uic--justify-content-center uic--align-items-center">
        <div className="uic--d-flex uic--flex-wrap uic--text-center">
          {Icon && (
            <div className="uic--interstitial-screen__inner--icon">
              <Icon />
            </div>
          )}

          <h1 className="uic--interstitial-screen__inner--title uic--header-1-5-text uic--w-100">
            {title}
          </h1>
          <span className="uic--interstitial-screen__inner--body uic--body-text">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InterstitialScreen;
