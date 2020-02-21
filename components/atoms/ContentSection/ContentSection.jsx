/** @module ContentSection */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './ContentSection.scss';

const ContentSection = ({className, children, style, heading}) => {
  const containerClasses = classNames(
    {
      'uic--content-section': true,
      'uic--position-relative': true,
    },
    className,
  );

  const headingNode =
    typeof heading === 'string' ? (
      <h3 className="uic--mcg-subhead-text">{heading}</h3>
    ) : (
      heading
    );

  return (
    <div className={containerClasses} style={style}>
      {headingNode}

      {children && (
        <div className="uic--content-section-children">{children}</div>
      )}
    </div>
  );
};

ContentSection.propTypes = {
  /** Section heading, strings will be wrapped inside of an h3 tag with the '*/
  heading: PropTypes.node,
  /** Children */
  children: PropTypes.node,
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

export default ContentSection;
