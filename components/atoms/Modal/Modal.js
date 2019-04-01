/** @module Modal */
import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon';
import {dsmColors as colors} from '~constants/js/colors';

import './Modal.scss';

export const ModalInterior = ({
  children,
  handleClick,
  handleKeyPress,
  show,
  preventClose,
}) => {
  const interiorClasses = classNames({
    'uic--d-block': show,
    'uic--d-none': !show,
    'uic--modal-interior': true,
    'uic--position-relative': true,
  });

  return (
    <aside className="uic--h-100 uic--w-100 uic--d-flex uic--align-items-center uic--justify-content-center">
      <div className={interiorClasses} role="complementary">
        {!preventClose && (
          <span
            className="uic--modal-close uic--position-absolute uic--d-flex uic--align-items-center uic--justify-content-center"
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex="0"
          >
            <CloseIcon fill={colors.white} height="16" width="16" />
          </span>
        )}
        <div className="uic--modal-body uic--position-relative">{children}</div>
      </div>
    </aside>
  );
};

ModalInterior.propTypes = {
  /** The contents of the modal interior. */
  children: PropTypes.node.isRequired,
  /** The function to handle the close of the modal. */
  handleClick: PropTypes.func,
  /** The key press function to handle the close of the modal. */
  handleKeyPress: PropTypes.func,
  /** The prop to determine if the modal is visible or not. */
  show: PropTypes.bool.isRequired,
  /** Removes the close icon from the modal if preventClose is true. */
  preventClose: PropTypes.bool,
};

/** Renders the Modal component. */
class Modal extends Component {
  /** @inheritdoc **/
  constructor(props) {
    super(props);

    this.state = {
      show: props.defaultOpen || false,
    };

    this.modalNode = createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    // Binds the event listener.
    document.addEventListener('mousedown', this.handleDocumentClick, false);
  }

  /** @inheritdoc **/
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
  }

  /**
   * Handles document clicks and checks to see if the modal should be closed or not.
   * @param {object} event - The click event.
   * @returns {undefined}
   */
  handleDocumentClick(event) {
    if (
      this.modalNode.current &&
      !this.modalNode.current.contains(event.target) &&
      this.state.show &&
      !this.props.preventClose
    ) {
      this.handleClick();
    }
  }

  /**
   * Handles click for visibility.
   * @returns {undefined}
   */
  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  /**
   * Handles the key press for visibility.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  handleKeyPress(event) {
    const code = event.keyCode || event.which;

    // Only responds to return presses.
    if (code === 13) {
      this.setState({
        show: !this.state.show,
      });
    }
  }

  /** @inheritdoc **/
  render() {
    const {show} = this.state;
    const {label, children, preventClose, className} = this.props;

    const containerClasses = classNames({
      'uic--d-block': show,
      'uic--d-none': !show,
      'uic--modal-container': true,
      'uic--position-fixed': true,
    });

    const wrapperClasses = classNames(
      {
        'uic--modal-wrapper': true,
      },
      className
    );

    return (
      <div className={wrapperClasses} ref={this.modalNode}>
        {label && (
          <div
            className="uic--modal-label"
            role="button"
            onClick={this.handleClick}
            onKeyPress={this.handleKeyPress}
            tabIndex="0"
          >
            {label}
          </div>
        )}
        <div className={containerClasses}>
          <ModalInterior
            show={show}
            handleClick={this.handleClick}
            handleKeyPress={this.handleKeyPress}
            preventClose={preventClose}
          >
            {children}
          </ModalInterior>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /** The button or text to display which will reveal the modal. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The contents of the modal which is presented when it's active. */
  children: PropTypes.node.isRequired,
  /** Defaults the modal state to open when it mounts. */
  defaultOpen: PropTypes.bool,
  /** Prevents the user from closing the modal, useful if the screen requires a user choice. */
  preventClose: PropTypes.bool,
  /** Additional class names to apply to the modal container. */
  className: PropTypes.string,
};

export default Modal;
