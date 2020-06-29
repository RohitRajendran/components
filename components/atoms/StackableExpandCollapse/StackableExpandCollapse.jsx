/** @module StackableExpandCollapse */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon.tsx';
import {colors} from '~constants/js/colors';
import './StackableExpandCollapse.scss';
import {isWindowDefined} from '~components/utilities/DetectBrowser/DetectBrowser';

/**
 * StackableExpandCollapse component that can be stacked vertically with others of itself.
 */
class StackableExpandCollapse extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.setContentHeight = this.setContentHeight.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.contentsRef = createRef();
    this.contentsInnerRef = createRef();

    this.state = {isExpanded: false};
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (isWindowDefined()) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /** @inheritdoc */
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setContentHeight();
  }

  /** @inheritdoc */
  componentDidUpdate() {
    this.setContentHeight();
  }

  /** Handles the resizing event when the user makes the screen larger/smaller.
   * @returns {undefined}
   */
  handleResize() {
    return this.forceUpdate();
  }

  /**
   * Set the content height property for a fluid animation.
   * @returns {undefined}
   */
  setContentHeight() {
    const height = this.contentsInnerRef.current.offsetHeight;
    this.contentsRef.current.style.setProperty(
      '--content-height',
      `${height}px`,
    );
  }

  /**
   * Toggle open/close state.
   * @returns {undefined}
   */
  toggleDrawer() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  /** @inheritdoc */
  render() {
    const {className, label, iconColor, children} = this.props;

    const containerClasses = classNames(
      {
        'uic--stackable-expand-collapse': true,
      },
      className,
    );

    return (
      <div className={containerClasses}>
        <button
          className="uic--stackable-expand-collapse-clickable uic--d-flex uic--justify-content-between uic--w-100 uic--text-left"
          onClick={this.toggleDrawer}
          data-cy={label}
          type="button"
        >
          {label}
          <CaretIcon
            className="uic--stackable-expand-collapse-icon uic--flex-shrink-0"
            direction={this.state.isExpanded ? 'down' : 'right'}
            fill={iconColor}
          />
        </button>

        <div
          ref={this.contentsRef}
          className={classNames({
            'uic--stackable-expand-collapse-contents': true,
            'uic--stackable-expand-collapse-expanded': this.state.isExpanded,
          })}
        >
          <div
            ref={this.contentsInnerRef}
            className="uic--stackable-expand-collapse-contents-inner"
          >
            {children}
          </div>
        </div>
        <hr className="uic--stackable-expand-collapse-divider" />
      </div>
    );
  }
}

StackableExpandCollapse.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** The container text label. */
  label: PropTypes.string.isRequired,
  /** The color of the indicator icon. */
  iconColor: PropTypes.string,
  /** The contents to display when expanded. */
  children: PropTypes.node.isRequired,
};

StackableExpandCollapse.defaultProps = {
  fill: colors.slate,
};

export default StackableExpandCollapse;
