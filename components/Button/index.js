import React from 'react';
import PropTypes from 'prop-types';
import {exclusive} from '../../proptypes';
import {and} from 'airbnb-prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './style.scss';

const Button = ({
  className,
  children,
  variant,
  type,
  dark,
  light,
  disabled,
  to,
  onClick,
  ...props
}) => {
  const btnClass = classNames(
    {
      btn: true,
      [`btn-${variant}`]: variant,
      'on-light': light,
      'on-dark': dark,
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

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
  dark: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: and([PropTypes.func, exclusive(['to'])]),
  to: and([PropTypes.string, exclusive(['onClick'])]),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
