/** @module Button */
import classNames from 'classnames';
import React, {FC, Fragment} from 'react';
import Spinner from '../Spinner/Spinner';
import {colors} from '../../../constants/js/colors';
import './Button.scss';

type ButtonInteriorProps = {
  showSpinner?: boolean;
  spinnerSize: number | string;
  spinnerColor: string;
};

export const ButtonInterior: FC<ButtonInteriorProps> = ({
  showSpinner,
  spinnerSize,
  spinnerColor,
  children,
}) => {
  const spinnerClassNames = classNames({
    'spinner-wrapper': true,
    'uic--d-none': !showSpinner,
    'uic--d-block': showSpinner,
    'uic--position-relative': showSpinner,
  });

  const textClassNames = classNames({
    'text-wrapper': true,
    'hide-button-text': showSpinner,
    'uic--invisible': showSpinner,
  });

  return (
    <Fragment>
      <div className={spinnerClassNames}>
        <Spinner height={spinnerSize} width={spinnerSize} fill={spinnerColor} />
      </div>
      <div className={textClassNames}>{children}</div>
    </Fragment>
  );
};

type ButtonPropsWithTo = {
  /** The URL that the user should be directed to when the button is clicked. Used primarily for link buttons. */
  to:
    | string
    | {
        pathname: string;
        query?: object;
        hash?: string;
        state?: object;
      };
};

type ButtonPropsWithOnClick =
  | {
      /** The optional type of button, for example `button` or `reset`. */
      type?: 'button' | 'reset';
      /** The handler to fire when the button is clicked. */
      onClick: React.MouseEventHandler;
    }
  | {
      /** The `submit` button type. */
      type: 'submit';
      /**
       * The optional handler to fire when the button is clicked.
       * If not provided, defer this handler to the encapsulating form.
       */
      onClick?: React.MouseEventHandler;
    };

export type ButtonProps = {
  /** Optional button component, allowing you to wrap the button in things such as react-router-dom's Link. */
  linkComponent?: React.ElementType;
  /** Optional class names to appear on the container. */
  className?: string;
  /** Changes the color scheme to dark. */
  dark?: boolean;
  /** Determines if the button is disabled or not. */
  disabled?: boolean;
  /** Show loading spinner instead of content. */
  isLoading?: boolean;
  /** Changes the color scheme to light. */
  light?: boolean;
  /** Specifies the accent type to affect the color scheme */
  accent?: 'warning';
} & (
  | {
      /** The style of button to be shown */
      variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
    }
  | {
      /** The 'icon' button style */
      variant: 'icon';
      /** Title attribute required for icon buttons */
      title: string;
    }
) &
  (ButtonPropsWithTo | ButtonPropsWithOnClick);

const Button: FC<ButtonProps> = ({
  children,
  className,
  dark,
  disabled,
  isLoading,
  light,
  linkComponent,
  variant,
  accent,
  ...props
}) => {
  const btnClass = classNames(
    {
      btn: true,
      'uic--position-relative': true,
      [`btn-${variant}`]: variant,
      'on-light': light,
      'on-dark': dark,
      [`uic--btn--${accent}`]: accent,
      'show-spinner': isLoading,
      'hide-spinner': !isLoading,
    },
    className,
  );

  let spinnerColor: string;

  if (variant === 'icon' || variant === 'link') {
    spinnerColor = dark ? colors.white : colors['royal'];
  } else if (variant === 'secondary' && dark) {
    spinnerColor = colors['super-dark'];
  } else if (variant === 'tertiary' && light) {
    spinnerColor = colors['royal'];
  } else {
    spinnerColor = colors.white;
  }

  const spinnerSize = variant === 'primary' || variant === 'icon' ? '23' : '19';

  const propsWithTo = props as ButtonPropsWithTo;

  if ('to' in propsWithTo) {
    const linkClass = classNames(btnClass, {
      disabled,
    });

    const linkProps: typeof props & {
      href?: ButtonPropsWithTo['to'];
      to?: ButtonPropsWithTo['to'];
    } = {
      ...props,
    };

    // Switches the link wrapper to the one provided via props if available.
    let LinkWrapper: React.ElementType;
    if (linkComponent && linkComponent !== 'a') {
      LinkWrapper = linkComponent;
      linkProps.to = propsWithTo.to;
    } else {
      LinkWrapper = 'a';
      linkProps.href = propsWithTo.to;

      // Do not propogate 'to' to LinkWrapper
      delete linkProps.to;
    }

    return (
      <LinkWrapper className={linkClass} {...linkProps}>
        <ButtonInterior
          showSpinner={isLoading}
          spinnerSize={spinnerSize}
          spinnerColor={spinnerColor}
        >
          {children}
        </ButtonInterior>
      </LinkWrapper>
    );
  }

  const propsWithOnClick = props as ButtonPropsWithOnClick;

  return (
    <button
      type={propsWithOnClick.type}
      className={btnClass}
      disabled={disabled}
      {...propsWithOnClick}
    >
      <ButtonInterior
        showSpinner={isLoading}
        spinnerSize={spinnerSize}
        spinnerColor={spinnerColor}
      >
        {children}
      </ButtonInterior>
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
