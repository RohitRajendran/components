/** @module Checkbox */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './OptionBox.scss';

const OptionBox = ({variant, checked, disabled, className}) => {
  const containerClasses = classNames(
    {
      'uic--position-absolute': true,
      [`uic--option-box-${variant}`]: variant,
      'uic--checked': checked,
      'uic--disabled': disabled,
    },
    className
  );

  return <span className={containerClasses} />;
};

OptionBox.propTypes = {
  /** The type of option box to display. This can be either `check` or `radio`. */
  variant: PropTypes.oneOf(['check', 'radio']).isRequired,
  /** Determines if the option box should be checked or not. */
  checked: PropTypes.bool,
  /** Determines if the option box should be disabled or not. */
  disabled: PropTypes.bool,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
};

export default OptionBox;
