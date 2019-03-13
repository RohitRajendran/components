import React, {Component} from 'react';
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
    const {label, options, value, disabled, className} = this.props;

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
          className={`ui-block-dropdown ui-light-block ${
            !this.state.isValid ? 'ui-block-input--invalid' : ''
          } ${this.state.isFocused ? 'ui-block-input--focused' : ''} ${
            disabled ? 'ui-block-dropdown--disabled ' : ''
          }`}
        >
          <div className="ui-block-input__label">{label}</div>
          <div>
            <Component
              {...this.props}
              classNamePrefix="ui-block-dropdown"
              className="ui-block-dropdown__select dropdown-toggle"
              value={value}
              placeholder={this.props.placeholder || ''}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autosize={true}
              simpleValue={true}
              searchable={
                _.has(this.props, 'searchable') ? this.props.searchable : true
              }
              clearable={
                _.has(this.props, 'clearable') ? this.props.clearable : true
              }
              {...optionProps}
            />
          </div>
        </div>
        <p className="ui-block-input__error margin-bottom-0 margin-left-1">
          {!this.state.isValid && this.state.validationMessage}
        </p>
      </div>
    );
  }
}

export default DropDown;
