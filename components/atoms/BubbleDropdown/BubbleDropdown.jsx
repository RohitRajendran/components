import PropTypes from 'prop-types';
import React from 'react';
import Select, {components} from 'react-select';
import ArrowIcon from '~components/atoms/icons/ArrowIcon/ArrowIcon.tsx';
import {colors} from '~constants/js/colors';
import './BubbleDropdown.scss';

// react-select dropdown icon
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ArrowIcon height="0.7rem" fill={colors.white} />
  </components.DropdownIndicator>
);

/** BubbleDropdown Component */
class BubbleDropdown extends React.Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Event handler to set when the selected dropdown value.
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
      label: option.value,
      value: option.value,
    }));

    // Set the default color here instead of in CSS because
    // the styles API and CSS classes conflict when trying to
    // override properties.
    const {color = colors.royal} = options.find(
      (option) => option.value === value,
    );

    const styles = {
      control: (provided) => ({
        ...provided,
        backgroundColor: color,
      }),
      option: (provided) => ({
        ...provided,
        backgroundColor: color,
        ':active': {
          ...styles[':active'],
          backgroundColor: color,
        },
      }),
      menu: (provided) => ({
        ...provided,
        backgroundColor: color,
      }),
    };

    return (
      <Select
        options={mappedOptions}
        // value must match the format of options
        value={{value, label: value}}
        onChange={this.onChange}
        isSearchable={false}
        isClearable={false}
        components={{DropdownIndicator}}
        styles={styles}
        className="uic--bubble-dropdown"
        classNamePrefix="uic--bubble-dropdown"
      />
    );
  }
}

BubbleDropdown.propTypes = {
  /** Collection of option labels and optional colors */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Option value */
      value: PropTypes.string.isRequired,
      /** Optional custom option color */
      color: PropTypes.string,
    }),
  ).isRequired,
  /** Currently selected value */
  value: PropTypes.string.isRequired,
  /** Handler for when the selected value changes */
  onChange: PropTypes.func.isRequired,
};

export default BubbleDropdown;
