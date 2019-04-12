import React, {Component, createRef} from 'react';
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

    this.id = Math.round(Math.random() * 10000000);
    this.contentNode = createRef();
    this.openExpandItem = this.openExpandItem.bind(this);
  }

  /** Toggles the item visibility and sets inner focus.
   * @returns {undefined}
   **/
  openExpandItem() {
    let height = 0;
    const element = document.querySelector(`.uic--ec-content-inner-${this.id}`);

    if (!element.clientHeight) {
      const content = document.querySelector(`.uic--ec-content-${this.id}`);
      height = content.clientHeight;
    }

    this.setState({open: !this.state.open, height});

    return this.contentNode.current.focus();
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

    const contentContainerClasses = classNames({
      'uic--ec-content-container': true,
      'uic--ec-content-container-closed': !this.state.open,
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
          <div className={`uic--ec-content-inner uic--ec-content-inner-${this.id}`} style={{height: this.state.height}}>
            <div className={`uic--ec-content uic--ec-content-${this.id}`} ref={this.contentNode} role="menuitem" tabIndex="0">
              {children}
            </div>
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
