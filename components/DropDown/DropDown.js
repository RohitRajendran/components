import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select, {Async} from 'react-select';
import {isUndefined, isNullOrUndefined} from 'util';
import _ from 'lodash';

export const FormContext = React.createContext({
  isSubmitted: false,
});

import './DropDown.scss';

/**
 Component to define a select with typeahed functionality.
 Wraps react-select
 */
class DropDown extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    _.bindAll(this, [
      'validate',
      'onFocus',
      'onBlur',
      'onChange',
      'getOptions',
    ]);

    this.state = {
      options: {},
      isFocused: false,
      touched: false,
      isValid: true,
      validationMessage: '',
    };
  }

  /** @inheritdoc */
  componentDidMount() {
    if (
      this.context.isSubmitted ||
      (!isNullOrUndefined(this.props.value) && this.props.value !== '')
    ) {
      this.validate();
    }
  }

  /** @inheritdoc */
  componentDidUpdate(prevProps) {
    if (
      (!this.state.touched && this.context.isSubmitted) ||
      (this.state.touched &&
        (prevProps.value !== this.props.value ||
          prevProps.validate !== this.props.validate))
    ) {
      this.setState(
        {touched: this.state.touched || this.context.isSubmitted},
        this.validate
      );
    }
  }

  /**
   * Run validation against this input.
   * @returns {undefined}
   */
  validate() {
    const validationResult = (this.props.validate || [])
      .map((validator) => validator(this.props.value))
      .find((result) => !result.isValid);

    if (isUndefined(validationResult)) {
      this.setState({
        isValid: true,
        validationMessage: '',
      });
    } else {
      this.setState({
        isValid: false,
        validationMessage: validationResult.message,
      });
    }
  }

  /**
   * Event handler to set when the field gets focus.
   * @param {Event} event - The triggering onfocus DOM event
   * @return {void}
   */
  onFocus(event) {
    this.setState({isFocused: true});
    const onFocus = this.props.onFocus || (() => null);
    onFocus(event);
  }

  /**
   * Event handler to set when the field loses focus.
   * @param {Event} event - The triggering onblur DOM event
   * @return {void}
   */
  onBlur(event) {
    if (!this.state.touched) {
      this.validate();
    }

    this.setState({isFocused: false, touched: true});
    const onBlur = this.props.onBlur || (() => null);
    onBlur(event);
  }

  /**
   * Event handler to set when the selected dropdown value.
   * @param {string} newValue - The new selected value
   * @returns {void}
   */
  onChange(newValue) {
    if (this.props.getOptions) {
      this.props.onChange(
        this.state.options[newValue]
          ? {label: this.state.options[newValue], value: newValue}
          : ''
      );
    } else {
      this.props.onChange(newValue || '');
    }
  }

  /**
   * Get option wrapper to store value in state.
   * @param {string} input - Type-ahead value
   * @returns {Promise} Resolves to array of value/label objects
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

  /** @inheritdoc */
  render() {
    const {
      label,
      options,
      value,
      disabled,
      className,
      description,
      validationErrorMsg,
    } = this.props;

    let Component, optionProps;
    if (this.props.getOptions) {
      Component = Async;
      optionProps = {
        loadOptions: this.getOptions,
        // Disable filtering; it should be done by the API layer
        filterOptions: (originalOptions) => originalOptions,
      };
    } else {
      Component = Select;
      optionProps = {options};
    }

    return (
      <div className={className}>
        <div
          className={`mcgonagall-dropdown ${
            !this.state.isValid ? 'error' : ''
          } ${this.state.isFocused ? 'focused' : ''} ${
            disabled ? 'disabled ' : ''
          }`}
        >
          <label>{label}</label>
          <div>
            <Component
              classNamePrefix="mcgonagall-dropdown"
              value={value}
              placeholder={this.props.placeholder || ''}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autosize={true}
              simpleValue={true}
              searchable={
                _.has(this.props, 'searchable') ? this.props.searchable : false
              }
              clearable={
                _.has(this.props, 'clearable') ? this.props.clearable : false
              }
              isDisabled={disabled}
              aria-label={label}
              {...optionProps}
            />
          </div>
          {description && (!showInvalidity || !error) ? (
            <div className="description">{description}</div>
          ) : description && (showInvalidity || error) ? (
            <div className="validation-error">
              {validationErrorMsg || 'Valid'}
            </div>
          ) : (
            <div className="validation-error">
              {validationErrorMsg || 'Valid'}
            </div>
          )}
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  getOptions: PropTypes.func,
};

export default DropDown;
