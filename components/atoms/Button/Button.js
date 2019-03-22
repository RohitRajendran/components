/** @module Button */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {exclusive} from '~proptypes';
import {and} from 'airbnb-prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './Button.scss';
import Spinner from '~components/atoms/Spinner/Spinner';
import {colors} from '~constants/js/colors';

const ButtonInterior = ({showSpinner, spinnerSize, spinnerColor, children}) => {
  const spinnerClassNames = classNames({
    'spinner-wrapper': true,
    'd-none': !showSpinner,
    'd-block': showSpinner,
    'p-relative': showSpinner,
  });

  const textClassNames = classNames({
    'hide-button-text': showSpinner,
    invisible: showSpinner,
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

ButtonInterior.propTypes = {
  showSpinner: PropTypes.boolean,
  spinnerSize: PropTypes.string.isRequired,
  spinnerColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Button = ({
  children,
  className,
  dark,
  disabled,
  isLoading,
  light,
  onClick,
  to,
  type,
  variant,
  ...props
}) => {
  const btnClass = classNames(
    {
      btn: true,
      [`btn-${variant}`]: variant,
      'on-light': light,
      'on-dark': dark,
      'show-spinner': isLoading,
      'hide-spinner': !isLoading,
    },
    className
  );

  const spinnerColor =
    variant === 'secondary' && dark
      ? colors.stratos
      : variant === 'tertiary' && light
      ? colors['violet-blue']
      : colors.white;

  const spinnerSize = variant === 'primary' ? '23' : '19';

  if (to) {
    const linkClass = classNames(btnClass, {
      disabled,
    });

    return (
      <Link role="button" to={to} className={linkClass} {...props}>
        <ButtonInterior
          showSpinner={isLoading}
          spinnerSize={spinnerSize}
          spinnerColor={spinnerColor}
        >
          {children}
        </ButtonInterior>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  light: PropTypes.bool,
  onClick: and([PropTypes.func, exclusive(['to'])]),
  to: and([PropTypes.string, exclusive(['onClick'])]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
