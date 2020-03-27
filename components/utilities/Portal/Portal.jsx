/** @module Portal */
import PropTypes from 'prop-types';
import {Component} from 'react';
import {createPortal} from 'react-dom';
import {isDocumentDefined} from '~components/utilities/DetectBrowser/DetectBrowser';

/** Creates a React Portal.  */
class Portal extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.portal = !isDocumentDefined() ? null : document.createElement('div');
  }

  /** @inheritdoc */
  componentDidMount() {
    if (isDocumentDefined()) {
      document.body.appendChild(this.portal);
    }
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (isDocumentDefined()) {
      document.body.removeChild(this.portal);
    }
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
