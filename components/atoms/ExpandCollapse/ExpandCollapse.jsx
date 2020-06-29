/** @module ExpandCollapse */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import ErrorFlagIcon from '~components/atoms/icons/ErrorFlagIcon/ErrorFlagIcon.tsx';
import ExpandyCircleIcon from '~components/atoms/icons/ExpandyCircleIcon/ExpandyCircleIcon.tsx';
import {validateChildren} from '~components/molecules/CardShell/CardShell';
import {isWindowDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import './ExpandCollapse.scss';

/** Expand/Collapse component used for the cabinet and card content.  */
class ExpandCollapse extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: props.defaultOpen || !props.collapsible,
      height: props.defaultOpen || !props.collapsible ? 'auto' : 0,
      isValid: true,
      isRequired: false,
    };

    this.contentNode = createRef();
    this.openExpandItem = this.openExpandItem.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /** @inheritdoc */
  static getDerivedStateFromProps(props, state) {
    if (typeof props.open !== 'undefined' && props.open !== state.open) {
      return {
        open: props.open,
        height: 0,
      };
    }

    return false;
  }

  /** Handles the resizing event when the user makes the screen larger/smaller.
   * @returns {undefined}
   */
  handleResize() {
    return this.forceUpdate();
  }

  /** @inheritdoc */
  componentDidMount() {
    if (isWindowDefined()) {
      window.addEventListener('resize', this.handleResize);
    }

    // If the component is set to default open the height gets calculated here so the content displays.
    if (this.state.open && !this.props.disabled) {
      const height = this.contentNode.current.scrollHeight;

      this.setState({
        height,
      });
    }

    if (this.props.collapsible) {
      this.checkValidation();
    }
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (isWindowDefined()) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /** @inheritdoc */
  componentDidUpdate() {
    // If the component height updates while the drawer is open the height gets adjusted accordingly.
    if (
      this.contentNode.current &&
      this.state.open &&
      this.state.height !== this.contentNode.current.scrollHeight
    ) {
      this.setState({
        height: this.contentNode.current.scrollHeight,
      });
    }

    if (this.props.collapsible) {
      this.checkValidation();
    }
  }

  /** Checks the validation state of the component.
   * @returns {undefined}
   */
  checkValidation() {
    const {hasIncompleteRequiredFields, isChildValid} = validateChildren(
      this.props.children,
      true,
    );
    if (
      hasIncompleteRequiredFields !== this.state.isRequired ||
      isChildValid !== this.state.isValid
    ) {
      this.setState({
        isRequired: hasIncompleteRequiredFields,
        isValid: isChildValid,
      });
    }
  }

  /** Toggles the item visibility and sets inner focus.
   * @returns {undefined}
   **/
  openExpandItem() {
    const height = this.contentNode.current
      ? this.contentNode.current.scrollHeight
      : 0;

    this.setState({
      open: !this.state.open,
      height: !this.state.open ? height : 0,
    });

    if (this.props.onClick && this.props.name) {
      this.props.onClick(this.props.name);
    }

    return this.contentNode.current.focus();
  }

  /** @inheritdoc */
  render() {
    const {
      aside,
      children,
      className,
      collapsible,
      description,
      disabled,
      isInvalid,
      label,
    } = this.props;

    const {isValid, isRequired} = this.state;

    const containerClasses = classNames(
      {
        'uic--ec': true,
        'uic--ec-disabled': disabled,
        'uic--ec-uncollapsible': !collapsible,
        'uic--position-relative': true,
      },
      className,
    );

    const contentContainerClasses = classNames({
      'uic--ec-content-container': true,
      'uic--ec-content-container-closed': !this.state.open,
    });

    const toggleable = !disabled && collapsible;

    // Toggles the icon component based on validity.
    const IconComponent =
      !isInvalid && isValid ? ExpandyCircleIcon : ErrorFlagIcon;

    return (
      <div className={containerClasses} role="menu">
        <div className="uic--d-flex uic--align-items-center">
          <div
            className="uic--ec-label uic--w-100"
            onClick={(toggleable && this.openExpandItem) || null}
            onKeyPress={(toggleable && this.openExpandItem) || null}
            role="button"
            tabIndex={!disabled && collapsible ? '0' : ''}
          >
            {toggleable && (
              <div className="uic--ec-controls-wrapper uic--position-absolute">
                <IconComponent
                  className="uic--ec-controls"
                  width="2.4rem"
                  height="2.4rem"
                  direction={this.state.open ? 'down' : 'right'}
                />
              </div>
            )}
            {label}
            <span className="uic--ec-required-fields">
              {isRequired && !disabled ? 'Required field(s)' : ''}
            </span>
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
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  /** Toggles the ability to collapse the component */
  collapsible: PropTypes.bool,
  /** Handler which fires when an option is clicked. */
  onClick: PropTypes.func,
  /** The name of the ExpandCollapse component. */
  name: PropTypes.string,
  /** Determines if the item should be open or not. */
  open: PropTypes.bool,
};

ExpandCollapse.defaultProps = {
  isInvalid: false,
  defaultOpen: false,
  collapsible: true,
};

export default ExpandCollapse;
