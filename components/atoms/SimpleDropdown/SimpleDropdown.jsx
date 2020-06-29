import PropTypes from 'prop-types';
import React from 'react';
import Select, {components} from 'react-select';
import ArrowIcon from '~components/atoms/icons/ArrowIcon/ArrowIcon.tsx';
import {colors} from '~constants/js/colors';
import './SimpleDropdown.scss';

// react-select dropdown icon
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ArrowIcon height="0.7rem" fill={colors.slate} />
  </components.DropdownIndicator>
);

/** SimpleDropdown Component */
class SimpleDropdown extends React.Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Event handler to set when the selected dropdown value changes.
   * @param {Object} newValue - The new selected value object
   * @returns {void}
   */
  onChange(newValue) {
    this.props.onChange(newValue.value);
  }

  /** @inheritdoc */
  render() {
    const {options, value} = this.props;

    const mappedOptions = options.map((option) => ({
      label: option,
      value: option,
    }));

    return (
      <Select
        options={mappedOptions}
        // value must match the format of options
        value={{value, label: value}}
        onChange={this.onChange}
        isSearchable={false}
        isClearable={false}
        components={{DropdownIndicator}}
        className="uic--simple-dropdown"
        classNamePrefix="uic--simple-dropdown"
      />
    );
  }
}

SimpleDropdown.propTypes = {
  /** Collection of option labels */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Currently selected value */
  value: PropTypes.string.isRequired,
  /** Handler for when the selected value changes */
  onChange: PropTypes.func.isRequired,
};

export default SimpleDropdown;
