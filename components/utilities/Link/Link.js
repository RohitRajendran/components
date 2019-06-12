/** @module Link */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({className, style, children, to, ...props}) => {
  const containerClasses = classNames(
    {
      'uic--functional-link': true,
    },
    className
  );

  return (
    <a className={containerClasses} style={style} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  /** HTML element that should appear within the button.  */
  children: PropTypes.node.isRequired,
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** The URL that the user should be directed to when the link is pressed. */
  to: PropTypes.string,
};

export default Link;
