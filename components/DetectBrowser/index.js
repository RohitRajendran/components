import React, {Component} from 'react';

/* eslint-disable */
/** Detects if the user is using IE.
 * @returns {integer} - Returns an integer if the browser matches a certain type.
 */
export function detectInternetExplorer() {
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

/** Detects if the user is using iOS.
 * @returns {Boolean} - Returns true or false if a user is on iOS or not.
 */
export function detectIOS() {
  return /^(iPhone|iPad|iPod)/.test(navigator.platform);
}

/**
 * Higher order component which detects if the user is currently using Internet Explorer or not.
 * Passes down isIe as props to the child component.
 * @param {*} WrappedComponent - JSX Component.
 * @returns {*} - Returns JSX.
 */
export default function detectBrowser(WrappedComponent) {
  return class DetectIe extends Component {
    /** @inheritdoc */
    render() {
      const isIe = detectInternetExplorer();
      const isIos = detectIOS();
      return (
        <WrappedComponent isIe={Boolean(isIe)} isIos={isIos} {...this.props} />
      );
    }
  };
}
