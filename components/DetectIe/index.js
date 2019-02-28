import React, {Component} from 'react';

/* eslint-disable */
/** Detects if the browser is of a certain type.
 * @returns {integer} - Returns an integer if the browser matches a certain type.
 */
export function detectBrowser() {
  if (typeof window === 'undefined') return 0;

  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return 0;
}
/* eslint-enable */

/**
 * Higher order component which detects if the user is currently using Internet Explorer or not.
 * Passes down isIe as props to the child component.
 * @param {*} WrappedComponent - JSX Component.
 * @returns {*} - Returns JSX.
 */
export default function detectIe(WrappedComponent) {
  return class DetectIe extends Component {
    /** @inheritdoc */
    render() {
      const isIe = detectBrowser();
      return <WrappedComponent isIe={Boolean(isIe)} {...this.props} />;
    }
  };
}
