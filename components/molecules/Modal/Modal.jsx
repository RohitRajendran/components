/** @module Modal */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon.tsx';
import {isDocumentDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import {colors} from '~constants/js/colors';
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
    'uic--position-relative': true,
    'uic--modal-dialog': true,
  });

  return (
    <aside className="uic--h-100 uic--w-100 uic--d-flex uic--align-items-center uic--justify-content-center">
      <div className={interiorClasses}>
        <div className="uic--modal-interior">
          {!preventClose && (
            <span
              className="uic--modal-close uic--position-absolute uic--d-flex uic--align-items-center uic--justify-content-center"
              onClick={handleClick}
              onKeyPress={handleKeyPress}
              role="button"
              tabIndex="0"
            >
              <CloseIcon fill={colors.white} height="16px" width="16px" />
            </span>
          )}
          <div className="uic--modal-body uic--position-relative">
            {children}
          </div>
        </div>
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

    this.modalNode = createRef();
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEscapePress = this.handleEscapePress.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    if (isDocumentDefined()) {
      document.addEventListener('mousedown', this.handleDocumentClick, false);
      document.addEventListener('keydown', this.handleEscapePress, false);
    }
  }

  /** @inheritdoc **/
  componentWillUnmount() {
    if (isDocumentDefined()) {
      document.removeEventListener(
        'mousedown',
        this.handleDocumentClick,
        false,
      );
      document.removeEventListener('keydown', this.handleEscapePress, false);
    }
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
      this.props.show &&
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
    this.props.toggle(this.props.name, !this.props.show);
  }

  /**
   * Handles the case where a user hits the escape key.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  handleEscapePress(event) {
    const code = event.keyCode || event.which;

    if (code === 27 && !this.props.preventClose) {
      this.props.toggle(this.props.name, false);
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
    const {label, children, preventClose, className, show} = this.props;

    const wrapperClasses = classNames(
      {
        'uic--modal-wrapper': true,
      },
      className,
    );

    const containerClasses = classNames({
      'uic--d-block': show,
      'uic--d-none': !show,
      'uic--modal-container': true,
      'uic--h-100': true,
      'uic--w-100': true,
      'uic--position-fixed': true,
    });

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
  /** The name of the modal. */
  name: PropTypes.string.isRequired,
  /** The button to display which will reveal the modal. */
  label: PropTypes.node,
  /** The contents of the modal which is presented when it's active. */
  children: PropTypes.node.isRequired,
  /** Prevents the user from closing the modal, useful if the screen requires a user choice. */
  preventClose: PropTypes.bool,
  /** Handles the change event of the modal. */
  toggle: PropTypes.func.isRequired,
  /** Determines if the modal should be displayed or not. */
  show: PropTypes.bool,
  /** Additional class names to apply to the modal container. */
  className: PropTypes.string,
};

Modal.defaultProps = {
  show: false,
};

export default Modal;
