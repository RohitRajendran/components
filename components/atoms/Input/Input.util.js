import {
  isDocumentDefined,
  isWindowDefined,
} from '~components/utilities/DetectBrowser/DetectBrowser';

/** Checks to see if the element is visible in the viewport.
 * @param {node} elem - The DOM node.
 * @param {integer} topOffset - The number of pixels to offset the top visibility by.
 * @returns {boolean} - Returns true or false depending on if the element is in view or not.
 */
export const isInViewport = (elem, topOffset) => {
  if (!isWindowDefined() || !isDocumentDefined()) {
    return false;
  }

  const bounding = elem.getBoundingClientRect();
  const offset = topOffset ? topOffset : 0;
  return (
    bounding.top >= offset &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
