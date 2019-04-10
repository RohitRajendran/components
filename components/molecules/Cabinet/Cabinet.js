/** @module Cabinet */
import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {exclusive} from '~proptypes';
import {and} from 'airbnb-prop-types';
import Button from '~components/atoms/Button/Button';

import './Cabinet.scss';

export const CabinetInterior = ({
  children,
  handleClick,
  handleKeyPress,
  show,
  header,
  visibleInPrint,
}) => {
  const containerClasses = classNames({
    'uic--cabinet': true,
    'uic--position-fixed': true,
    'uic--show-cabinet': show,
    'uic--hide-cabinet': !show,
    'uic--visible-in-print': visibleInPrint,
  });

  return (
    <aside className={containerClasses}>
      <div className="uic--cabinet-header uic--w-100 uic--d-flex">
        <div
          className="uic--cabinet-close"
          onClick={handleClick}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex="0"
        />
        <div className="uic--cabinet-title">{header}</div>
      </div>
      <div className="uic--cabinet-body uic--position-relative uic--w-100 uic--h-100">
        {children}
      </div>
    </aside>
  );
};

CabinetInterior.propTypes = {
  /** The contents of the cabinet. */
  children: PropTypes.node,
  /** Handler which handles the closing of the cabinet. */
  handleClick: PropTypes.func.isRequired,
  /** Handler which handles the closing of the cabinet with a keyboard click. */
  handleKeyPress: PropTypes.func.isRequired,
  /** Prop which determines if the cabinet should be visible or not. */
  show: PropTypes.bool,
  /** Adjusts the cabinets header text. */
  header: PropTypes.string,
  /** Determines if the cabinet should be visible when the page is printed or not. */
  visibleInPrint: PropTypes.bool,
};

CabinetInterior.defaultProps = {
  header: 'Help Center',
};

/** Renders the cabinet component. */
class Cabinet extends Component {
  /** @inheritdoc **/
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.cabinetNode = createRef();
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEscapePress = this.handleEscapePress.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick, false);
    document.addEventListener('keydown', this.handleEscapePress, false);
  }

  /** @inheritdoc **/
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
    document.removeEventListener('keydown', this.handleEscapePress, false);
  }

  /**
   * Handles document clicks and checks to see if the modal should be closed or not.
   * @param {object} event - The click event.
   * @returns {undefined}
   */
  handleDocumentClick(event) {
    const show = this.props.handleWithState ? this.state.show : this.props.show;

    if (
      this.cabinetNode.current &&
      !this.cabinetNode.current.contains(event.target) &&
      show
    ) {
      this.handleClick();
    }
  }

  /**
   * Handles click for visibility
   * @returns {undefined}
   */
  handleClick() {
    if (this.props.handleWithState) {
      this.setState({
        show: !this.state.show,
      });
    } else {
      this.props.toggle(this.props.name, !this.props.show);
    }
  }

  /**
   * Handles the case where a user hits the escape key.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  handleEscapePress(event) {
    const code = event.keyCode || event.which;

    if (code === 27) {
      if (this.props.handleWithState) {
        this.setState({
          show: false,
        });
      } else {
        this.props.toggle(this.props.name, false);
      }
    }
  }

  /** Handles key press click for visibility.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  handleKeyPress(event) {
    const code = event.keyCode || event.which;

    // Only responds to return presses.
    if (code === 13) {
      this.handleClick();
    }
  }

  /** @inheritdoc **/
  render() {
    const {
      label,
      children,
      className,
      labelClassName,
      labelOnDark,
    } = this.props;

    const containerClasses = classNames(
      {
        'uic--text-left': true,
        'uic--cabinet-container': true,
      },
      className
    );

    return (
      <div className={containerClasses} ref={this.cabinetNode}>
        {label && (
          <Button
            className={labelClassName}
            onClick={this.handleClick}
            light={!labelOnDark}
            dark={labelOnDark}
            variant="link"
            tabIndex="0"
          >
            {label}
          </Button>
        )}
        <CabinetInterior
          {...this.props}
          handleClick={this.handleClick}
          handleKeyPress={this.handleKeyPress}
          show={this.props.handleWithState ? this.state.show : this.props.show}
        >
          {children}
        </CabinetInterior>
      </div>
    );
  }
}

Cabinet.propTypes = {
  /** Makes the cabinet fully state controlled. Turning this option on
   * will disable the use of the show prop. */
  handleWithState: and([PropTypes.bool, exclusive(['name', 'show'])]),
  /** The name of the cabinet. */
  name: and([PropTypes.string, exclusive(['handleWithState'])]),
  /** The contents of the cabinet. */
  children: PropTypes.node,
  /** Handler to toggle the visibility of the cabinet. */
  toggle: and([PropTypes.func, exclusive(['handleWithState'])]),
  /** Prop to determine if the cabinet is open or not. */
  show: and([PropTypes.bool, exclusive(['handleWithState'])]),
  /** Adjusts the description text at the top of the cabinet. */
  header: PropTypes.string,
  /** Determines if the cabinet should be visible when the page is printed or not. */
  visibleInPrint: PropTypes.bool,
  /** Additional class names to apply to the cabinet container. */
  className: PropTypes.string,
  /** Optional label to attach to the cabinet to open/close it. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Optional classes to apply to the label */
  labelClassName: PropTypes.string,
  /** Informs the component if the label is on a dark background. */
  labelOnDark: PropTypes.bool,
};

export default Cabinet;
