import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ExpandyCircleIcon from '~components/atoms/icons/ExpandyCircleIcon/ExpandyCircleIcon';

import './ExpandCollapse.scss';

/** Expand/Collapse component used for the cabinet and card content.  */
class ExpandCollapse extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openExpandItem = this.openExpandItem.bind(this);
  }

  /** Toggles the item visibility.
   * @returns {undefined}
   **/
  openExpandItem() {
    this.setState({open: !this.state.open});
  }

  /** @inheritdoc */
  render() {
    const {
      label,
      description,
      aside,
      disabled,
      children,
      className,
    } = this.props;

    const containerClasses = classNames(
      {
        'uic--ec': true,
        'uic--position-relative': true,
        'uic--ec-disabled': disabled,
      },
      className
    );

    const contentClasses = classNames({
      'uic--ec-open': this.state.open,
      'uic--ec-closed': !this.state.open,
    });

    const contentContainerClasses = classNames({
      'uic--ec-content': true,
      'uic--ec-content-closed': !this.state.open,
    });

    const iconClasses = classNames({
      'uic--ec-controls-expanded': this.state.open,
      'uic--position-absolute': true,
      'uic--ec-controls': true,
    });

    return (
      <div className={containerClasses}>
        <div className="uic--d-flex uic--align-items-center">
          <div
            className="uic--ec-label uic--w-100"
            onClick={!disabled && this.openExpandItem}
            onKeyPress={!disabled && this.openExpandItem}
            role="button"
            tabIndex={!disabled ? '0' : ''}
          >
            {!disabled && (
              <ExpandyCircleIcon
                className={iconClasses}
                width="2.4rem"
                height="2.4rem"
                rotation={this.state.open ? 'down' : 'right'}
              />
            )}
            {label}
            {description && (
              <div className="uic--ec-label-description">{description}</div>
            )}
          </div>

          {aside && (
            <div className="uic--ec-aside uic--d-flex uic--align-items-center">
              {aside}
            </div>
          )}
        </div>

        <div className={contentContainerClasses}>
          <div className={contentClasses}>
            {children}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

ExpandCollapse.propTypes = {
  /** The label of the item. */
  label: PropTypes.string.isRequired,
  /** Optional description of the expand/collapse component. */
  description: PropTypes.string,
  /** The contents of the expand/collapse item. */
  children: PropTypes.node,
  /** Optional content to appear to the right of the expand/collapse component. */
  aside: PropTypes.node,
  /** Determines if the item should be disabled or not. */
  disabled: PropTypes.bool,
  /** Optional classnames to apply to the container. */
  className: PropTypes.string,
};

export default ExpandCollapse;
