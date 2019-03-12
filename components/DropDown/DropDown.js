/** @module DropDown */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Select, {Async} from 'react-select';
import _ from 'lodash';

import './DropDown.scss';

const dropDownStyles = {
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    return {
      ...styles,
      color: '#FFF',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  menuContainerStyle: () => {
    return {
      color: 'blue',
    };
  },
};

/**
 Component to define a select with typeahed functionality.
 Wraps react-select
 */
class DropDown extends Component {
  /**
   * Standard constructor to bind event handlers and set default state.
   * @param {object} props - component properties
   */
  constructor(props) {
    super(props);
    _.bindAll(this, ['updateValue', 'onBlur', 'onInputChange', 'getOptions']);
    this.state = {
      hasValue: Boolean(props.value),
      hasTypedValue: false,
      options: {},
    };
  }

  /**
   * React method which is executed when new props are received.
   * @param {Object} nextProps - component properties.
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.value && !nextProps.value) {
      this.setState({hasValue: false});
    } else if (!this.props.value && nextProps.value) {
      // if parent component sets value
      this.setState({hasValue: true});
    }
    this.setState({hasTypedValue: false});
  }

  /**
   * Called when an update to the select component happens.
   * @param {object} newValue - the selected value
   * @returns {undefined}
   */
  updateValue(newValue) {
    if (this.props.getOptions) {
      this.props.setField(
        this.state.options[newValue]
          ? {label: this.state.options[newValue], value: newValue}
          : ''
      );
    } else {
      this.props.setField(newValue || '');
    }
  }

  /**
   * Event handler for InputChange event
   * @param {object} inputValue - the typed value
   * @returns {undefined}
   */
  onInputChange(inputValue) {
    this.setState({hasTypedValue: Boolean(inputValue)});
  }

  /**
   * Event handler for blur event
   * @returns {undefined}
   */
  onBlur() {
    this.setState({hasTypedValue: false});
  }

  /**
   * Get option wraper to store value in state too
   * @param {String} input - typed value
   * @returns {Promise} resolves to array of value/label objects
   */
  getOptions(input) {
    return this.props.getOptions(input).then(({options}) => {
      this.setState({
        options: {
          ...this.state.options,
          ...options.reduce(
            (acc, {label, value}) => ({...acc, [value]: label}),
            {}
          ),
        },
      });
      return {options};
    });
  }

  /**
   * Renders React JSX
   * @return {React.DOM} Render a typeahed select input.
   */
  render() {
    const hasValueCSS =
      this.state.hasValue || this.state.hasTypedValue ? 'select-has-value' : '';
    const wrapperCSS = `mcgonagall-dropdown ${hasValueCSS} ${
      this.props.selectTypeCSS
    }`;
    // simpleValue prop in Select sets the param to updateValue a string, not an object.
    let Component, optionProps;
    if (this.props.getOptions) {
      Component = Async;
      optionProps = {
        loadOptions: this.getOptions,
        // disable filtering, all done by API
        filterOptions: (options) => options,
      };
    } else {
      Component = Select;
      optionProps = {options: this.props.options};
    }
    return (
      <div className={wrapperCSS}>
        <Component
          classNamePrefix="mcgonagall-dropdown"
          required={this.props.required || false}
          autosize={true}
          name={this.props.name}
          disabled={this.props.disabled}
          value={this.props.value}
          onChange={this.updateValue}
          searchable={
            _.has(this.props, 'searchable') ? this.props.searchable : false
          }
          simpleValue={true}
          onBlur={this.onBlur}
          resetValue={this.props.resetValue}
          placeholder={this.props.placeholder || ''}
          clearable={
            _.has(this.props, 'clearable') ? this.props.clearable : false
          }
          backspaceRemoves={this.props.backspaceRemoves}
          deleteRemoves={this.props.deleteRemoves}
          optionComponent={this.props.optionComponent}
          valueComponent={this.props.valueComponent}
          onInputChange={this.onInputChange}
          styles={dropDownStyles}
          {...optionProps}
        />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default DropDown;
