import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Select, {Async, components} from 'react-select';
import {isNullOrUndefined, isUndefined} from 'util';
import './DropDown.scss';
import ArrowIcon from '../icons/ArrowIcon/ArrowIcon';
import CloseIcon from '../icons/CloseIcon/CloseIcon';

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
      this.props.isSubmitted ||
      (!isNullOrUndefined(this.props.value) && this.props.value !== '')
    ) {
      this.validate();
    }
  }

  /** @inheritdoc */
  componentDidUpdate(prevProps) {
    if (
      (!this.state.touched && this.props.isSubmitted) ||
      (prevProps.value !== this.props.value ||
        prevProps.validate !== this.props.validate)
    ) {
      this.setState(
        {touched: this.state.touched || this.props.isSubmitted},
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
        this.props.name,
        newValue && this.state.options[newValue.value] ? newValue.value : ''
      );
    } else {
      this.props.onChange(
        this.props.name,
        newValue && newValue.value ? newValue.value : ''
      );
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

  /**
   * Filters down the current option list by value.
   * @param {array} options - An array of options
   * @returns {array} - Returns a filtered down array with the option.
   */
  getCurrentOption(options) {
    if (this.props.getOptions && this.state.options) {
      return [
        {value: this.props.value, label: this.state.options[this.props.value]},
      ];
    }
    return options.filter((obj) => obj.value === this.props.value);
  }

  /** @inheritdoc */
  render() {
    const {
      label,
      options,
      disabled,
      className,
      description,
      placeholder,
      searchable,
      clearable,
      loading,
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
    const dropDownClasses = classNames(
      {
        error: !this.state.isValid,
        focused: this.state.isFocused,
        disabled,
      },
      'mcgonagall-dropdown'
    );

    const selectedValue =
      (optionProps && optionProps.options) || this.state.options
        ? this.getCurrentOption(optionProps.options)
        : [];

    // Renders a react-select compatible dropdown indicator.
    const DropdownIndicator = (props) => {
      return (
        <components.DropdownIndicator {...props}>
          <ArrowIcon fill={this.props.disabled ? '#9fa6bb' : '#5b6279'} />
        </components.DropdownIndicator>
      );
    };

    // Renders a react-select compatible clear indicator.
    const ClearIndicator = (props) => {
      return (
        <components.ClearIndicator {...props}>
          <CloseIcon fill={this.props.disabled ? '#9fa6bb' : '#5b6279'} />
        </components.ClearIndicator>
      );
    };

    return (
      <div className={containerClasses}>
        <div className={dropDownClasses}>
          <label>{label}</label>
          <div className="mcgonagall-dropdown-wrapper">
            <ComponentType
              {...this.props}
              components={{DropdownIndicator, ClearIndicator}}
              classNamePrefix="mcgonagall-dropdown"
              value={selectedValue}
              placeholder={placeholder}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autosize={true}
              simpleValue={true}
              isSearchable={searchable}
              isClearable={clearable}
              isDisabled={disabled}
              isLoading={loading}
              aria-label={label}
              {...optionProps}
            />
          </div>
          {description && this.state.isValid ? (
            <div className="description">{description}</div>
          ) : !this.state.isValid ? (
            <div className="validation-error">
              {this.state.validationMessage || 'Invalid'}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  validate: PropTypes.arrayOf(PropTypes.func),
  getOptions: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  loading: PropTypes.bool,
  isSubmitted: PropTypes.bool,
};

DropDown.defaultProps = {
  searchable: true,
  clearable: true,
  placeholder: '',
  options: [],
};

export default DropDown;
