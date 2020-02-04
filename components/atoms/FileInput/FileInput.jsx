/** @module FileInput */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import {ButtonInterior} from '~components/atoms/Button/Button';
import {CardShellContext} from '~components/molecules/CardShell/CardShell';
import {colors} from '~constants/js/colors';
import './FileInput.scss';

/** Renders the FileInput field component. */
class FileInput extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      isDraggingOver: false,
      isFocused: false,
      file: null,
    };

    this.isValid = this.isValid.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.inputNode = createRef();
    this.inputElement = createRef();
    if (props.setRef) {
      props.setRef(this.inputElement);
    }
  }

  /**
   * Determines if the input is valid or not.
   * @return {boolean} - Returns true or false depending on the validity.
   */
  isValid() {
    const {isValid = () => true} = this.props;
    const {file} = this.state;
    return isValid(file) || !file;
  }

  /**
   * Handle dragleave events for the dropzone.
   * @param {DragEvent} e - the HTML drag event
   * @returns {undefined}
   */
  onDragLeave(e) {
    e.preventDefault();
    this.setState({isDraggingOver: false});
  }

  /**
   * Handle dragover events for the dropzone. Necessary to prevent the
   * file from being opened by the browser.
   * @param {DragEvent} e - the HTML drag event
   * @returns {undefined}
   */
  onDragOver(e) {
    e.preventDefault();
    this.setState({isDraggingOver: true});
  }

  /**
   * Handle drop events for the dropzone.
   * @param {DropEvent} e - the HTML drop event
   * @returns {undefined}
   */
  onDrop(e) {
    e.preventDefault();
    const {files} = e.dataTransfer;
    if (files.length === 1 && !this.props.disabled) {
      this.inputElement.current.files = files;
      this.setState({file: files[0]});
      if (this.props.onChange) {
        this.props.onChange(this.props.name, files[0]);
      }
    }
    this.setState({isDraggingOver: false});
  }

  /**
   * Handle change events for the file input.
   * @param {Event} e - the HTML event
   * @returns {undefined}
   */
  onChange(e) {
    e.preventDefault();
    if (e.target.files.length === 1) {
      this.setState({file: e.target.files[0]});
      if (this.props.onChange) {
        this.props.onChange(this.props.name, e.target.files[0]);
      }
    }
  }

  /**
   * Makes the label border show active focus when the inner input
   * receives keyboard focus.
   * @returns {undefined}
   */
  onFocus() {
    this.setState({isFocused: true});
  }

  /**
   * Makes the label border hide active focus when the inner input
   * loses keyboard focus.
   * @returns {undefined}
   */
  onBlur() {
    this.setState({isFocused: false});
  }

  /** @inheritdoc */
  render() {
    const {
      description,
      disableOptionalFlag,
      error,
      label,
      name,
      placeholder,
      required,
      validationErrorMsg,
      disabled,
      className,
      style,
      isLoading,
      buttonText,
      buttonTextWithFile,
      onClick,
    } = this.props;

    const attrs = {
      name,
      required,
      disabled,
      onClick,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    };

    const showInvalidity = !disabled ? !this.isValid() : false;
    const {file, isFocused} = this.state;
    const isEmpty = !file;

    let inputLabel = label;
    if (!required && !disableOptionalFlag) {
      inputLabel = `${label} (Optional)`;
    }

    return (
      // The Context allows it to get the showRequiredError prop when in the CardShell
      <CardShellContext.Consumer>
        {({showRequiredError}) => {
          const reqErrorNecessary =
            (this.props.showRequiredError || showRequiredError) &&
            required &&
            isEmpty;

          const containerClasses = classNames(
            {
              'uic--file-input': true,
              'uic--position-relative': true,
              'uic--error': showInvalidity || error || reqErrorNecessary,
              'uic--disabled': disabled,
            },
            className,
          );

          const labelClasses = classNames({
            'uic--file-input__label': true,
            'uic--position-relative': true,
            'uic--w-100': true,
            'uic--disabled': disabled,
            'uic--empty': isEmpty,
            'uic--dragging': !disabled && this.state.isDraggingOver,
            'uic--focus': isFocused,
          });

          const fakeButtonClasses = classNames({
            disabled,
            btn: true,
            'btn-secondary': true,
            'show-spinner': isLoading,
            'hide-spinner': !isLoading,
            'on-light': true,
            'uic--position-relative': true,
          });

          return (
            <div
              className={containerClasses}
              style={style}
              ref={this.inputNode}
            >
              <div
                className="uic--file-input__wrapper"
                onDragLeave={this.onDragLeave}
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
              >
                <label className={labelClasses} htmlFor="uic--file-input-id">
                  <div className={fakeButtonClasses}>
                    <ButtonInterior
                      showSpinner={isLoading}
                      spinnerColor={colors.white}
                      spinnerSize="19"
                    >
                      {file
                        ? buttonTextWithFile || buttonText || 'Replace File'
                        : buttonText || 'Choose File'}
                    </ButtonInterior>
                  </div>
                  <span className="uic--file-input__span">
                    {file ? file.name : placeholder ? placeholder : ''}
                  </span>
                  <span>
                    <input
                      type="file"
                      className="uic--file-input__input"
                      id="uic--file-input-id"
                      aria-label={inputLabel}
                      ref={this.inputElement}
                      {...attrs}
                    />
                  </span>
                </label>
                <label className="uic--position-absolute">
                  {isEmpty ? '' : inputLabel}
                </label>
              </div>
              {description &&
              !(showInvalidity || error || reqErrorNecessary) ? (
                <div className="uic--description">{description}</div>
              ) : (
                <div className="uic--validation-error">
                  {isEmpty && reqErrorNecessary
                    ? 'Required Field'
                    : validationErrorMsg}
                </div>
              )}
            </div>
          );
        }}
      </CardShellContext.Consumer>
    );
  }
}

FileInput.propTypes = {
  /** The label representing the input field. */
  label: PropTypes.string.isRequired,
  /** The name of the input field. */
  name: PropTypes.string.isRequired,
  /** The description of the input field. Displayed separately to the label. */
  description: PropTypes.string,
  /** The placeholder text of the input field. This is displayed if there's no value. */
  placeholder: PropTypes.string,
  /** Boolean representing if the input value is required in a form. */
  required: PropTypes.bool,
  /** Disables the (Optional) flag when a field is not marked as required. */
  disableOptionalFlag: PropTypes.bool,
  /** Handler which is run whenever there's a change to the input. Passes back the name and value of input. */
  onChange: PropTypes.func,
  /** Handler which is run whenever the input is clicked, given the HTML input event */
  onClick: PropTypes.func,
  /** Forces the input into an error state. */
  error: PropTypes.bool,
  /** The error message to display when the input fails validation. */
  validationErrorMsg: PropTypes.string,
  /** Determines if the input field should prevent the user interacting with it. */
  disabled: PropTypes.bool,
  /** Sets the ref to the input. */
  setRef: PropTypes.func,
  /** Validates the input based on the provided logic. */
  isValid: PropTypes.func,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Displays error state for incomplete required fields */
  showRequiredError: PropTypes.bool,
  /** Optional inline styles. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Display spinner in button if loading */
  isLoading: PropTypes.bool,
  /** File select button text. Defaults to "Choose File". */
  buttonText: PropTypes.string,
  /** File select button text to display when a file is selected. Defaults to buttonText if provided, otherwise "Replace File". */
  buttonTextWithFile: PropTypes.string,
};

export default FileInput;
