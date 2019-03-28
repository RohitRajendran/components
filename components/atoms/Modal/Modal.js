/** @module Modal */
import React, {Component} from 'react';

import './Modal.scss';

const ModalInterior = ({
  children,
  handleClick,
  show,
}) => (
  <aside
    className={`cabinet ${show ? 'show-cabinet' : 'hide-cabinet'}`}
    role="complementary"
  >
    <div className="cabinet-header">
      <div className="cabinet-close" onClick={handleClick} />
      <div className="cabinet-title">modal title</div>
    </div>
    <div className="cabinet-body">{children}</div>
  </aside>
);


class Modal extends Component {
  /** @inheritdoc **/
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.node = null;
    this.linkNode = null;

    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  /** @inheritdoc **/
  componentWillMount() {
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
      !this.linkNode.contains(event.target) &&
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
    this.setState({
      show: !this.state.show,
    });
  }

  /** @inheritdoc **/
  render() {
    const {show} = this.state;
    const {label, children, header, labelStyle} = this.props;

    return (
      <div className="cabinet-container text-left">
        <span onClick={this.handleClick} ref={(node) => (this.linkNode = node)}>{label}</span>
        <div ref={(node) => (this.node = node)}>
          <ModalInterior show={show} handleClick={this.handleClick}>
            {children}
          </ModalInterior>
        </div>
      </div>
    );
  }
}

export default Modal;
