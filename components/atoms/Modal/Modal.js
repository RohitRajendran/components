/** @module Modal */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const ModalInterior = ({
  children,
  handleClick,
  show,
}) => (
  <aside
    className={`uic--modal-interior ${show ? 'uic--d-block' : 'uic--d-none'}`}
    role="complementary"
  >
    <div className="ss">
    <div className="cabinet-header">
      <div className="cabinet-close" onClick={handleClick} />
      <div className="cabinet-title">a thing</div>
    </div>
    <div className="cabinet-body">{children}</div>
    </div>
  </aside>
);


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

    document.addEventListener('mousedown', this.handleDocumentClick, false);
  }

  /** @inheritdoc **/
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
  }

  /**
   * Handles document clicks
   * @param {object} event - the click event
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
   * Handles click for visibility
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
    const {label, children, header} = this.props;

    console.log('shoudld i show', show)
    return (
      <div className="uic--modal-wrapper" ref={(node) => this.linkNode = node}>
        {label && (
          <div className="uic--modal-label" onClick={this.handleClick}>
            {label}
          </div>
        )}
        <div className={`uic--modal-container ${show ? 'uic--d-block' : 'uic--d-none'}`} ref={(node) => (this.node = node)} >
          <ModalInterior header={header} show={show} handleClick={this.handleClick}>
            {children}
          </ModalInterior>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  defaultOpen: PropTypes.bool,
  preventClose: PropTypes.bool,
}

export default Modal;
