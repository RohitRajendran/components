import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select, {Async} from 'react-select';
import classNames from 'classnames';
import {isUndefined, isNullOrUndefined} from 'util';
import _ from 'lodash';

import './DropDown.scss';

export const FormContext = React.createContext({
  isSubmitted: false,
});

/** Renders the DropDown field component which wraps react-select. */
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
   * Runs validation against this input.
   * @returns {undefined}
   */
  validate() {
    const validationResult = this.validationResults(this.props.validate || []);
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

  /** Gets the results of the validation array.
   * @param {array} validators - An array of validator functions
   * @returns {object|undefined} - Returns an object if not valid, undefined if valid.
   */
  validationResults(validators) {
    return validators
      .map((validator) => validator(this.props.value))
      .find((result) => !result.isValid);
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
        this.state.options[newValue.value]
          ? {label: newValue.label, value: newValue.value}
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
      return options;
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
      placeholder,
      searchable,
      clearable,
    } = this.props;

    let ComponentType, optionProps;
    if (this.props.getOptions) {
      ComponentType = Async;
      optionProps = {
        loadOptions: this.getOptions,
      };
    } else {
      ComponentType = Select;
      optionProps = {options};
    }

    const containerClasses = classNames(className);

    return (
      <div className={containerClasses}>
        <div
          className={`mcgonagall-dropdown ${
            !this.state.isValid ? 'error' : ''
          } ${this.state.isFocused ? 'focused' : ''} ${
            disabled ? 'disabled ' : ''
          }`}
        >
          <label>{label}</label>
          <div>
            <ComponentType
              {...this.props}
              classNamePrefix="mcgonagall-dropdown"
              value={value}
              placeholder={placeholder}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autosize={true}
              simpleValue={true}
              searchable={searchable}
              clearable={clearable}
              isDisabled={disabled}
              aria-label={label}
              {...optionProps}
            />
          </div>
          {description && this.state.isValid ? (
            <div className="description">{description}</div>
          ) : !this.state.isValid ? (
            <div className="validation-error">
              {this.state.validationMessage || 'Valid'}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  description: PropTypes.string,
  validateErrorMsg: PropTypes.string,
  placeholder: PropTypes.string,
  validationErrorMsg: PropTypes.string,
  validate: PropTypes.func,
  getOptions: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
};

DropDown.defaultProps = {
  searchable: true,
  clearable: true,
  placeholder: '',
  options: [],
};

export default DropDown;
