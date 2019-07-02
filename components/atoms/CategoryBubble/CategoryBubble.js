import React from 'react';
import PropTypes from 'prop-types';

import './CategoryBubble.scss';

const CategoryBubble = ({label, color}) => (
  <div className="uic--category-bubble" style={{backgroundColor: color}}>
    {label}
  </div>
);

CategoryBubble.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CategoryBubble;
