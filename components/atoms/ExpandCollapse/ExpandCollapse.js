/** @module ExpandCollapse */
import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ExpandyCircleIcon from '~components/atoms/icons/ExpandyCircleIcon/ExpandyCircleIcon';
import ErrorFlagIcon from '~components/atoms/icons/ErrorFlagIcon/ErrorFlagIcon';

import './ExpandCollapse.scss';

/** Expand/Collapse component used for the cabinet and card content.  */
class ExpandCollapse extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: props.defaultOpen,
      valid: true,
      height: 0,
    };

    this.contentNode = createRef();
    this.openExpandItem = this.openExpandItem.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    // If the component is set to default open the height gets calculated here so the content displays.
    if (this.state.open && !this.props.disabled) {
      const height = this.contentNode.clientHeight;

      this.setState({
        height,
      });
    }
  }

  /** @inheritdoc */
  componentDidUpdate() {
    // If the component height updates while the drawer is open the height gets adjusted accordingly.
    if (
      this.state.open &&
      this.state.height !== this.contentNode.current.clientHeight
    ) {
      this.setState({
        height: this.contentNode.current.clientHeight,
      });
    }
  }

  /** Toggles the item visibility and sets inner focus.
   * @returns {undefined}
   **/
  openExpandItem() {
    const height = this.contentNode.current.clientHeight;

    this.setState({
      open: !this.state.open,
      height: !this.state.open ? height : 0,
    });

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
      isInvalid,
    } = this.props;

    const containerClasses = classNames(
      {
        'uic--ec': true,
        'uic--ec-disabled': disabled,
        'uic--position-relative': true,
      },
      className
    );

    const contentContainerClasses = classNames({
      'uic--ec-content-container': true,
      'uic--ec-content-container-closed': !this.state.open,
    });

    const iconClasses = classNames({
      'uic--ec-controls-expanded': this.state.open && !isInvalid,
      'uic--ec-controls': true,
      'uic--position-absolute': true,
    });

    // Toggles the icon component based on validity.
    const IconComponent = !isInvalid ? ExpandyCircleIcon : ErrorFlagIcon;

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
              <IconComponent
                className={iconClasses}
                width="24"
                height="24"
                direction={this.state.open ? 'down' : 'right'}
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
          {!disabled && (
            <div
              className="uic--ec-content-inner"
              style={{height: this.state.height}}
            >
              <div
                className="uic--ec-content"
                ref={this.contentNode}
                role="menuitem"
                tabIndex="0"
              >
                {children}
              </div>
            </div>
          )}
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
  /** Toggles to the invalid state. */
  isInvalid: PropTypes.bool,
  /** Defaults the state to expanded. */
  defaultOpen: PropTypes.bool,
};

ExpandCollapse.defaultProps = {
  isInvalid: false,
  defaultOpen: false,
};

export default ExpandCollapse;
