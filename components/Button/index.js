import React from 'react';
import PropTypes from 'prop-types';
import {and} from 'airbnb-prop-types';
import classNames from 'classnames';
import {Link} from 'react-router';

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
      <Link role="button" to={to} className={linkClass}>
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
    >
      {children}
    </button>
  );
};

const exclusiveProps = (exclusives) => (props, propName, componentName) => {
  const multiples = [];

  for (const exclusive of exclusives) {
    if (typeof props[exclusive] !== 'undefined') {
      multiples.push(exclusive);
    }
  }
  if (multiples.length > 0 && typeof props[propName] !== 'undefined') {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. Other exclusive props already defined: ${multiples.join(
        ', '
      )}`
    );
  }
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
  dark: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: and([PropTypes.func, exclusiveProps(['to'])]),
  to: and([PropTypes.string, exclusiveProps(['onClick'])]),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
