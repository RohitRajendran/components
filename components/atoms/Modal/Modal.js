/** @module Modal */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon';
import {dsmColors as colors} from '~constants/js/colors';

import './Modal.scss';

const ModalInterior = ({children, handleClick, show, preventClose}) => (
  <div className="uic--h-100 uic--w-100 uic--d-flex uic--align-items-center uic--justify-content-center">
    <div
      className={`uic--modal-interior uic--position-relative ${
        show ? 'uic--d-block' : 'uic--d-none'
      }`}
      role="complementary"
    >
      {!preventClose && (
        <span
          className="uic--modal-close uic--position-absolute uic--d-flex uic--align-items-center uic--justify-content-center"
          onClick={handleClick}
          onKeyPress={handleClick}
          role="button"
          tabIndex="0"
        >
          <CloseIcon fill={colors.white} height="16" width="16" />
        </span>
      )}
      <div className="uic--modal-body">
        <div>{children}</div>
      </div>
    </div>
  </div>
);

ModalInterior.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  show: PropTypes.bool.isRequired,
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

    this.node = null;
    this.linkNode = null;

    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);

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
    const {show} = this.state;
    if (
      this.node &&
      !this.node.contains(event.target) &&
      this.linkNode &&
      !this.linkNode.contains(event.target) &&
      show &&
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

  /** @inheritdoc **/
  render() {
    const {show} = this.state;
    const {label, children, preventClose} = this.props;

    return (
      <div
        className="uic--modal-wrapper"
        ref={(node) => (this.linkNode = node)}
      >
        {label && (
          <div
            className="uic--modal-label"
            role="button"
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
            tabIndex="0"
          >
            {label}
          </div>
        )}
        <div
          className={`uic--modal-container uic--position-fixed ${
            show ? 'uic--d-block' : 'uic--d-none'
          }`}
          ref={(node) => (this.node = node)}
        >
          <ModalInterior
            show={show}
            handleClick={this.handleClick}
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
  label: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  preventClose: PropTypes.bool,
};

export default Modal;
