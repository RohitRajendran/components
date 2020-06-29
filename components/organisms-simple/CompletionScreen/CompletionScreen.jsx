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
      'uic--w-100': true,
      'uic--d-flex': true,
    },
    className,
  );
  const innerClass = classNames({
    'uic--mcg-completion-screen__inner': true,
    'uic--align-items-center': true,
    'uic--d-flex': true,
    'uic--flex-column': true,
    'uic--justify-content-center': true,
    'uic--w-100': true,
  });

  return (
    <div className={containerClass}>
      <div className={innerClass} data-cy={title}>
        {feature && <div className="uic--feature">{feature}</div>}
        <h2>{title}</h2>
        <p className="uic--text-center">{description}</p>
        <div
          className="uic--actions uic--d-flex uic--flex-column uic--align-items-center"
          data-cy="continue"
        >
          {actions}
        </div>
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
