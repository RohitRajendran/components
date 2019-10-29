import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './CompletionScreen.scss';

const CompletionScreen = ({
  title,
  description,
  actions,
  feature,
  className,
}) => {
  const containerClass = classNames(
    {
      'uic--mcg-completion-screen': true,
      'uic--align-items-center': true,
      'uic--d-flex': true,
      'uic--flex-column': true,
      'uic--justify-content-center': true,
      'uic--w-100': true,
    },
    className,
  );

  return (
    <div className={containerClass}>
      {feature && <div className="uic--feature">{feature}</div>}
      <h2>{title}</h2>
      <p className="uic--text-center">{description}</p>
      <div className="uic--actions uic--d-flex uic--flex-column uic--align-items-center">
        {actions}
      </div>
    </div>
  );
};

CompletionScreen.propTypes = {
  /** Action button or links to be displayed at the bottom of the screen */
  actions: PropTypes.node.isRequired,
  /** Additional class names to apply */
  className: PropTypes.string,
  /** Screen description */
  description: PropTypes.string,
  /** Feature image or content to be displayed at the top */
  feature: PropTypes.node,
  /** Screen title */
  title: PropTypes.string.isRequired,
};

export default CompletionScreen;
