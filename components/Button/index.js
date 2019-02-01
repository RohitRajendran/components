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

/**
 * Exclusive Props Check
 *
 * For a given prop, this checks that that prop does not coexist with other props. In other words, if the prop of "onClick" is included, we should not allow "to" to be defined in addition.
 * @param {array} exclusives - Array of strings defining what also cannot be defined.
 * @returns {function} the prop check
 */
function exclusiveProps(exclusives) {
  return (props, propName, componentName) => {
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
}

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
