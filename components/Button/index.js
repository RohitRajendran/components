import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({children, type, dark, light, disabled, handleClick}) => {
  const btnClass = classNames({
    btn: true,
    [`btn-${type}`]: true,
    'on-light': light,
    'on-dark': dark,
  });

  return (
    <button className={btnClass} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
