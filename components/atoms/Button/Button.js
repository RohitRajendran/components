/** @module Button */
import React from 'react';
import PropTypes from 'prop-types';
import {exclusive} from '~proptypes';
import {and} from 'airbnb-prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './Button.scss';
import Spinner from '~components/atoms/Spinner/Spinner';
import {colors} from '~constants/js/colors';

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

  if (to) {
    const linkClass = classNames(btnClass, {
      disabled,
    });

    return (
      <Link role="button" to={to} className={linkClass} {...props}>
        {children}
      </Link>
    );
  }

  const spinnerColor =
    variant === 'secondary' && dark
      ? colors.stratos
      : variant === 'tertiary' && light
      ? colors['violet-blue']
      : colors.white;

  const spinnerSize = variant === 'primary' ? '23' : '19';

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="spinner-wrapper">
        <Spinner height={spinnerSize} width={spinnerSize} fill={spinnerColor} />
      </div>
      <div className="button-text">{children}</div>
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
