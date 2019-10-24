import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import BubbleDropdown from '~components/atoms/BubbleDropdown/BubbleDropdown';
import BubbleSelector from '~components/atoms/BubbleSelector/BubbleSelector';

const BubbleNav = ({options, value, onChange, fixedWidth}) => (
  <Fragment>
    <div className="uic--d-none uic--d-sm-flex">
      <BubbleSelector
        options={options}
        value={value}
        onChange={onChange}
        fixedWidth={fixedWidth}
      />
    </div>
    <div className="uic--d-sm-none">
      <BubbleDropdown options={options} value={value} onChange={onChange} />
    </div>
  </Fragment>
);

BubbleNav.propTypes = {
  /** Collection of option labels and optional colors */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Option value */
      value: PropTypes.string.isRequired,
      /** Optional custom option color */
      color: PropTypes.string,
    })
  ).isRequired,
  /** Currently selected value */
  value: PropTypes.string.isRequired,
  /** Handler for when the selected value changes */
  onChange: PropTypes.func.isRequired,
  /** Optional fixed width of each selector */
  fixedWidth: PropTypes.string,
};

export default BubbleNav;
