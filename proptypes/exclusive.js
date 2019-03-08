/**
 * Exclusive Props Check
 *
 * For a given prop, this checks that that prop does not coexist with other props. In other words, if the prop of "onClick" is included, we should not allow "to" to be defined in addition.
 * @param {array} exclusives - Array of strings defining what also cannot be defined.
 * @returns {function} the prop check
 */
function exclusiveProps(exclusives) {
  return (props, propName, componentName) => {
    const multiples = [];

    for (const exclusive of exclusives) {
      if (typeof props[exclusive] !== 'undefined' && exclusive !== propName) {
        multiples.push(exclusive);
      }
    }
    if (multiples.length > 0 && typeof props[propName] !== 'undefined') {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Other exclusive props already defined: ${multiples.join(
          ', '
        )}`
      );
    }
  };
}

export default exclusiveProps;
