import React, {Component} from 'react';

/**
 * Higher order component which detects if the user is currently using Internet Explorer or not.
 * Passes down isIe as props to the child.
 * @param {*} WrappedComponent - JSX Component.
 * @returns {*} - Returns JSX.
 */
export default function detectIe(WrappedComponent) {
  return class DetectIe extends Component {
    /** @inheritdoc */
    constructor(props) {
      super(props);
      this.state = {
        isIe: false,
      };
    }

    /** @inheritdoc */
    componentWillUpdate() {
      if (typeof window === 'undefined') {
        return;
      }

      const ua = window.navigator.userAgent;
      const msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older
        return this.setState({isIe: true});
      }

      const trident = ua.indexOf('Trident/');
      if (trident > 0) {
        // IE 11
        this.setState({isIe: true});
      }

      const edge = ua.indexOf('Edge/');
      if (edge > 0) {
        // Edge (IE 12+)
        return this.setState({isIe: true});
      }

      return;
    }

    /** @inheritdoc */
    render() {
      return <WrappedComponent isIe={this.state.isIe} {...this.props} />;
    }
  };
}
