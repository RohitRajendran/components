/** @module Portal */
import PropTypes from 'prop-types';
import {Component} from 'react';
import ReactDOM, {createPortal} from 'react-dom';

/** Creates a React Portal.  */
class Portal extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.portal = document.createElement('div');
  }

  /** @inheritdoc */
  componentDidMount() {
    document.body.appendChild(this.portal);
  }

  /** @inheritdoc */
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.portal);
    document.body.removeChild(this.portal);
  }

  /** @inheritdoc */
  render() {
    return createPortal(this.props.children, this.portal);
  }
}

Portal.propTypes = {
  /* Child components that will get appended to the portal. */
  children: PropTypes.node,
};

export default Portal;
