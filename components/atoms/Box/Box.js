/** @module Box */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Box.scss';

const Box = ({className, style, selected, icon, title, description}) => {
  const containerClasses = classNames(
    {
      'uic--box': true,
      'uic--text-center': true,
      'uic--box-highlighted': selected,
    },
    className
  );

  let BoxIcon;

  if (icon) {
    BoxIcon = icon;
  }

  return (
    <div className={containerClasses} style={style}>
      {BoxIcon && (
        <BoxIcon
          className="uic--box-illustration"
          illuminate={selected}
          height="10rem"
          width="10rem"
          color
        />
      )}
      <h3 className="uic--box-header">{title}</h3>
      <p className="uic--box-description">{description}</p>
    </div>
  );
};

Box.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** The title to appear on the box. */
  title: PropTypes.string,
  /** The description to appear on the box. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Determines if the box is selected or not. */
  selected: PropTypes.bool,
  /** The icon to display at the top of the card. */
  icon: PropTypes.node,
};

export default Box;
