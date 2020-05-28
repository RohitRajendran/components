/** @module InterstitialScreen */
import classNames from 'classnames';
import React, {FC} from 'react';
import './InterstitialScreen.scss';
import Button, {ButtonProps} from '../../atoms/Button/Button';
import AdminIcon from '../../atoms/icons/AdminIcon/AdminIcon';
import {colors} from '~constants/js/colors';

export type InterstitialScreenProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional class names to apply to the inner container. */
  innerClassName?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** The title of the interstitial. */
  title: string;
  /** The description of the interstitial. */
  description: React.ReactNode | string;
  /** The icon thumbnail to appear above the interstitial. */
  Icon?: React.ComponentType;
  /** The props which control the top action bar. */
  actionBarOptions?: {
    /** The action bar button label. */
    buttonLabel: string;
    /** The button options/props. */
    buttonOptions: ButtonProps;
    /** Determines if the admin icon should be hidden or not, defaults to true. */
    hideIcon?: boolean;
  };
};

/** Renders a full page interstitial screen. */
const InterstitialScreen: FC<InterstitialScreenProps> = ({
  className,
  innerClassName,
  children,
  description,
  actionBarOptions,
  Icon,
  style,
  title,
}) => {
  const containerClasses = classNames(
    {
      'uic--interstitial-screen': true,
      'uic--h-100': true,
      'uic--flex-column': true,
      'uic--d-flex': true,
    },
    className,
  );

  const innerContainerClasses = classNames(
    {
      'uic--interstitial-screen__inner': true,
      'uic--w-100': true,
      'uic--d-flex': true,
      'uic--flex-column': true,
      'uic--justify-content-center': true,
      'uic--align-items-center': true,
    },
    innerClassName,
  );

  return (
    <div className={containerClasses} style={style}>
      {actionBarOptions && (
        <div className="uic--interstitial-screen__action-bar uic--w-100 uic--text-right uic--flex-grow-0">
          <div className="uic--d-flex uic--align-items-center uic--justify-content-end">
            <Button
              className="uic--d-flex uic--align-items-center"
              variant="link"
              dark
              {...actionBarOptions.buttonOptions}
            >
              {actionBarOptions.buttonLabel}

              {!actionBarOptions.hideIcon && (
                <AdminIcon
                  className="uic--interstitial-screen__action-bar--icon"
                  height="1.8rem"
                  width="1.8rem"
                  fill={colors.white}
                />
              )}
            </Button>
          </div>
        </div>
      )}
      <div className="uic--interstitial-screen__wrapper uic--d-flex uic--align-items-center uic--justify-content-center uic--flex-grow-1">
        <div className={innerContainerClasses}>
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
    </div>
  );
};

export default InterstitialScreen;
