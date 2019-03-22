/** @module Checkbox */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './OptionBox.scss';

const OptionBox = ({variant, checked, disabled, className}) => {
  const containerClasses = classNames(
    {
      'ui--position-absolute': true,
      [`option-box-${variant}`]: variant,
      checked,
      disabled,
    },
    className
  );

  return <span className={containerClasses} />;
};

OptionBox.propTypes = {
  variant: PropTypes.oneOf(['check', 'radio']).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default OptionBox;
