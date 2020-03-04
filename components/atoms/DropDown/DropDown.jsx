/** @module DropDown */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Select, {components} from 'react-select';
import AsyncSelect from 'react-select/async';
import {isNullOrUndefined, isUndefined} from 'util';
import ArrowIcon from '~components/atoms/icons/ArrowIcon/ArrowIcon.tsx';
import ClearIcon from '~components/atoms/icons/ClearIcon/ClearIcon.tsx';
import {CardShellContext} from '../../molecules/CardShell/CardShell';
import './DropDown.scss';

/** Renders the DropDown field component which wraps react-select. */
class DropDown extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);

    this.portal = isNullOrUndefined(document)
      ? null
      : document.createElement('div');

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
    if (!isNullOrUndefined(document)) {
      // Appends the required class name and pulls the DropDown into a Portal.
      // This is done so the DropDown can live inside containers with a hidden overflow property.
      this.portal.classList.add(
        'uic--mcgonagall-dropdown',
        'uic--mcgonagall-dropdown-internal',
      );
      document.body.appendChild(this.portal);
    }

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
        this.validate,
      );
    }
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (!isNullOrUndefined(document)) {
      document.body.removeChild(this.portal);
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
        newValue && this.state.options[newValue.value] ? newValue.value : '',
      );
    } else {
      this.props.onChange(
        this.props.name,
        newValue && newValue.value ? newValue.value : '',
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
            {},
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
      className,
      clearable,
      description,
      disableOptionalFlag,
      disabled,
      label,
      loading,
      options,
      placeholder,
      required,
      searchable,
      value,
    } = this.props;

    let ComponentType,
      optionProps,
      dropDownLabel = label;
    if (this.props.getOptions) {
      ComponentType = AsyncSelect;
      optionProps = {
        loadOptions: this.getOptions,
      };
    } else {
      ComponentType = Select;
      optionProps = {options};
    }
    if (label && !required && !disableOptionalFlag) {
      dropDownLabel = `${label} (Optional)`;
    }

    const containerClasses = classNames(className);

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
          <ClearIcon fill={this.props.disabled ? '#9fa6bb' : '#5b6279'} />
        </components.ClearIndicator>
      );
    };

    return (
      // The Context allows it to get the showRequiredError prop when in the CardShell
      <CardShellContext.Consumer>
        {({showRequiredError}) => {
          const reqErrorNecessary =
            (this.props.showRequiredError || showRequiredError) &&
            required &&
            !value;

          const dropDownClasses = classNames({
            'uic--mcgonagall-dropdown': true,
            'uic--position-relative': true,
            'uic--error': !this.state.isValid || reqErrorNecessary,
            'uic--focused': this.state.isFocused,
            'uic--disabled': disabled,
          });

          return (
            <div className={containerClasses}>
              <div className={dropDownClasses}>
                <label className="uic--position-absolute">
                  {dropDownLabel}
                </label>
                <div className="uic--mcgonagall-dropdown-wrapper">
                  <ComponentType
                    {...this.props}
                    components={{DropdownIndicator, ClearIndicator}}
                    classNamePrefix="uic--mcgonagall-dropdown"
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
                    aria-label={dropDownLabel}
                    menuPortalTarget={this.portal}
                    {...optionProps}
                  />
                </div>
                {description && this.state.isValid && !reqErrorNecessary ? (
                  <div className="uic--description">{description}</div>
                ) : (
                  <div className="uic--validation-error">
                    {reqErrorNecessary
                      ? 'Required Field'
                      : this.state.validationMessage}
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </CardShellContext.Consumer>
    );
  }
}

DropDown.propTypes = {
  /** The label which appears above the form label. */
  label: PropTypes.string.isRequired,
  /** An array of options such as label and value. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** The option label. */
      label: PropTypes.string.isRequired,
      /** The value of the option. */
      value: PropTypes.string.isRequired,
    }),
  ),
  /** The currently selected option in the dropdown.  */
  value: PropTypes.string,
  /** Disables the (Optional) flag when a field is not marked as required. */
  disableOptionalFlag: PropTypes.bool,
  /** The name of the input field. */
  name: PropTypes.string.isRequired,
  /** Determines if the dropdown input should be disabled or not. */
  disabled: PropTypes.bool,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Displays an input field description beneath the dropdown. */
  description: PropTypes.node,
  /** The placeholder to display when there's no input. */
  placeholder: PropTypes.string,
  /** Determines if the input is required or not. */
  required: PropTypes.bool,
  /** Validates the input based on the provided logic. Must return an object with the `isValid` key set to true or false. */
  validate: PropTypes.arrayOf(PropTypes.func),
  /** Function that fetches a series of options. Useful when lazy loading content from an API. */
  getOptions: PropTypes.func,
  /** Handler which is run whenever there's a change to the input. */
  onChange: PropTypes.func,
  /** Handler which overrides the default onFocus behavior. */
  onFocus: PropTypes.func,
  /** Handler which is run whenever the input fired a blur event. */
  onBlur: PropTypes.func,
  /** Toggles type ahead functionality on/off. */
  searchable: PropTypes.bool,
  /** Toggles the ability to clear the search field on/off. */
  clearable: PropTypes.bool,
  /** Toggles the loading state of the input on/off. */
  loading: PropTypes.bool,
  /** Determines if this field has been submitted or not. */
  isSubmitted: PropTypes.bool,
  /** Displays error state for incomplete required fields */
  showRequiredError: PropTypes.bool,
};

DropDown.defaultProps = {
  searchable: true,
  clearable: true,
  placeholder: '',
  options: [],
};

export default DropDown;
