/** @module CardShell */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';

import './CardShell.scss';

/**
 * Validates children to see if it is valid
 * @param {array<Node>} children component
 * @returns {boolean} validity
 */
export const validateChildren = (children) => {
  const childValidity = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.required) {
        if (child.props.getField) {
          const getFieldValue = child.props.getField(child.props.name);
          if (
            getFieldValue === true ||
            (getFieldValue && getFieldValue.length > 0)
          ) {
            return true;
          }
          return false;
        } else if (child.props.mask && child.props.isValid) {
          return (
            child.props.mask.regex.test(child.props.value) &&
            child.props.isValid()
          );
        } else if (child.props.mask) {
          return child.props.mask.regex.test(child.props.value);
        } else if (child.props.checked) {
          return child.props.checked;
        }
        return Boolean(child.props.value);
      } else if (
        (child.props.pattern &&
          !new RegExp(child.props.pattern).test(child.props.value)) ||
        (child.props.min && child.props.value < child.props.min) ||
        (child.props.max && child.props.value > child.props.max) ||
        (child.props.maxLength &&
          child.props.value &&
          child.props.value.length > child.props.maxLength) ||
        (child.props.isValid && !child.props.isValid())
      ) {
        return false;
      }
      return validateChildren(child.props.children);
    }
    return true;
  });

  if (childValidity) {
    return childValidity.reduce((a, b) => a && b, true);
  }
  return true;
};

const CardShell = (props) => {
  const isInvalid = !validateChildren(props.children);

  const cardClass = classNames(
    {
      'mcgonagall-card': true,
      active: !props.isCollapsed,
      collapsed: props.isCollapsed,
      error: props.hasError,
    },
    props.className
  );

  return (
    <div className={cardClass}>
      {props.isCollapsed ? (
        props.summary
      ) : (
        <form onChange={props.onChange} onSubmit={props.onSubmit}>
          {props.children}

          <div className="card-after-content">
            {props.beforeButton && (
              <div className="card-before-button">{props.beforeButton}</div>
            )}

            {!props.hideButton && (
              <Button
                className="card-submit"
                disabled={isInvalid || props.disabled}
                isLoading={props.loading}
                light
                type="submit"
                variant="secondary"
              >
                {props.buttonText}
              </Button>
            )}

            {props.afterButton && (
              <div className="card-after-button">{props.afterButton}</div>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

CardShell.propTypes = {
  afterButton: PropTypes.node,
  beforeButton: PropTypes.node,
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  hideButton: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  summary: PropTypes.node,
};

CardShell.defaultProps = {
  buttonText: 'Continue',
};
export default CardShell;
