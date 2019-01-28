import React, {Component} from 'react';

/**
 * Higher order component which detects if the user is currently using Internet Explorer or not.
 * @param {*} WrappedComponent - JSX Component.
 * @returns {*} - Returns JSX.
 */
export function detectIe(WrappedComponent) {
  return class DetectIe extends Component {
    /** @inheritdoc */
    constructor(props) {
      super(props);
      this.state = {
        isIe: false,
      };
    }

    /** @inheritdoc */
    componentDidMount() {
      if (typeof window === 'undefined') {
        return;
      }

      const ua = window.navigator.userAgent;

      const msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        // eslint-disable-next-line radix
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      const trident = ua.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        const rv = ua.indexOf('rv:');
        // eslint-disable-next-line radix
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      const edge = ua.indexOf('Edge/');
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        // eslint-disable-next-line radix
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return this.setState({ieIe: false});
    }

    /** @inheritdoc */
    render() {
      return <WrappedComponent isIe={this.state.isIe} {...this.props} />;
    }
  };
}
