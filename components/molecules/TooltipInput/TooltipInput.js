/** @module TooltipInput */
import React, {PureComponent, createRef} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Tooltip from '~components/atoms/Tooltip/Tooltip';
import Input, {maskEnum} from '~components/atoms/Input/Input';
import Button from '~components/atoms/Button/Button';
import TrashIcon from '~components/atoms/icons/TrashIcon/TrashIcon';
import './TooltipInput.scss';

/** Input field which is wrapped in a Tooltip.  */
class TooltipInput extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      tooltipInput: props.config.value || '',
    };

    this.tooltip = createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.clearInputState = this.clearInputState.bind(this);
  }

  /** Handles the click event when the tooltip is cancelled.
   * @returns {undefined}
   */
  handleCancelClick() {
    this.clearInputState();
    this.tooltip.current.tooltipRef = null;
    ReactTooltip.hide();
  }

  /** Handles the click event when the tooltip is confirmed.
   * @returns {undefined}
   */
  handleConfirmClick() {
    if (this.props.onConfirm) {
      // Passes back the input value on confirmation.
      this.props.onConfirm(this.state.tooltipInput);

      if (this.props.clearStateOnConfirm) {
        this.clearInputState();
      }

      this.tooltip.current.tooltipRef = null;
      ReactTooltip.hide();
    }
  }

  /** Handles the key press event.
   * @param {object} event - The key press event object.
   * @returns {boolean} - Returns false if the event was successful.
   */
  handleKeyPress(event) {
    if (event.which === 13 || event.keyCode === 13) {
      this.handleConfirmClick();
      return false;
    } else {
      // Prevents event bubbling if included within a form.
      return true;
    }
  }

  /** Handles the click event when the tooltip remove icon is pressed..
   * @returns {undefined}
   */
  handleRemoveClick() {
    if (this.props.onRemove) {
      this.props.onRemove();
      this.clearInputState();

      this.tooltip.current.tooltipRef = null;
      ReactTooltip.hide();
    }
  }

  /** Handles the Input change event.
   * @param {string} name - The name of the input.
   * @param {string} value - The value of the input.
   * @returns {undefined}
   */
  handleInputChange(name, value) {
    this.setState({tooltipInput: value});
  }

  /** Clears the input state.
   * @returns {undefined}
   */
  clearInputState() {
    this.setState({tooltipInput: ''});
  }

  /** Stops click propagation when the user clicks within the tooltip.
   * This allows you to make input changes without the tooltip closing on you.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  onTooltipClick(event) {
    event.stopPropagation();
  }

  /** @inheritdoc */
  render() {
    const {
      className,
      style,
      cancelLabel,
      confirmLabel,
      config,
      onRemove,
      ...props
    } = this.props;

    const containerClasses = classNames(
      {
        'uic--tooltip-input': true,
      },
      className
    );

    const buttonContainerClasses = classNames({
      'uic--d-flex': true,
      'uic--align-items-center': true,
      'uic--justify-content-between': onRemove,
      'uic--justify-content-end': !onRemove,
    });

    // Disables the confirmation button if the field isn't valid.
    const fieldIsValid =
      this.props.config && this.props.config.isValid
        ? this.props.config.isValid(this.state.tooltipInput)
        : true;

    return (
      <Tooltip
        className={containerClasses}
        style={style}
        hover={false}
        tooltipRef={this.tooltip}
        globalEventOff={null}
        {...props}
      >
        <div
          className="uic--tooltip-input-content"
          onClick={this.onTooltipClick}
          onKeyPress={this.onTooltipClick}
          aria-hidden="true"
        >
          <Input
            {...config}
            name="tooltipInput"
            onChange={this.handleInputChange}
            onKeyPress={fieldIsValid ? this.handleKeyPress : null}
            value={this.state.tooltipInput}
          />

          <div className="uic--row uic--align-items-center uic--justify-content-center">
            <div className="uic--col-7 uic--text-left">
              <Button onClick={this.handleCancelClick} variant="link">
                {cancelLabel}
              </Button>
            </div>

            <div className="uic--col-5 uic--text-right">
              <div className={buttonContainerClasses}>
                {onRemove && (
                  <Button onClick={this.handleRemoveClick} variant="icon">
                    <TrashIcon />
                  </Button>
                )}

                <div className="uic--tooltip-input-confirm">
                  <Button
                    disabled={!fieldIsValid}
                    onClick={this.handleConfirmClick}
                    variant="secondary"
                    light
                  >
                    {confirmLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tooltip>
    );
  }
}

TooltipInput.propTypes = {
  /** Clears the component state when the user confirms. */
  clearStateOnConfirm: PropTypes.bool,
  /** Determines the placement of the Tooltip. */
  placement: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  /** Changes the label color scheme to light. */
  lightLabel: PropTypes.bool,
  /** Determines the label (button) variant. */
  labelVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'link',
    'icon',
  ]),
  /** The label text for the button which activates the tooltip. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Function which fires when the user confirms the input. */
  onConfirm: PropTypes.func.isRequired,
  /** Optional function which fires when the user hits the remove flag. Displays a trash icon when present. */
  onRemove: PropTypes.func,
  /** The label of the confirm button. */
  confirmLabel: PropTypes.string,
  /** The label of the cancel button. */
  cancelLabel: PropTypes.string,
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Config object for the input field. */
  config: PropTypes.shape({
    /** A string or symbol to append to the end of the input. For example `%`. Automatically applied for percentage masks. */
    append: PropTypes.string,
    /** Determines the autoComplete type on the input. */
    autoComplete: PropTypes.string,
    /** A string or symbol to pre-pend to the start of the input. For example `$`. Automatically applied for currency masks. */
    prepend: PropTypes.string,
    /** The label representing the input field. */
    label: PropTypes.string.isRequired,
    /** The name of the input field. */
    name: PropTypes.string.isRequired,
    /** The description of the input field. Displayed separately to the label. */
    description: PropTypes.string,
    /** The type of input field. */
    type: PropTypes.oneOf([
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ]),
    /** The placeholder text of the input field. This is displayed if there's no value. */
    placeholder: PropTypes.string,
    /** The current value of the input field.  */
    value: PropTypes.string.isRequired,
    /** Boolean representing if the input value is required in a form. */
    required: PropTypes.bool,
    /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
    pattern: PropTypes.string,
    /** The max length of the input field value. */
    maxLength: PropTypes.number,
    /** Allows you to select which input type is allowed in the field. */
    mask: PropTypes.oneOf(Object.keys(maskEnum)),
    /** Handler which is run whenever there's a change to the input. Passes back the name and value of input. */
    onChange: PropTypes.func,
    /** The minimum number value. Only applicable if the type is set to number. */
    min: PropTypes.number,
    /** The maximum number value. Only applicable if the type is set to number. */
    max: PropTypes.number,
    /** The value step increment. Only applicable if the type is set to number. */
    step: PropTypes.number,
    /** The error message to display when the input fails validation. */
    validationErrorMsg: PropTypes.string,
    /** Runs the validation logic on every blur event if toggled as true. */
    validateOnBlur: PropTypes.bool,
    /** Determines if the input field should prevent the user interacting with it. */
    disabled: PropTypes.bool,
    /** Sets the ref to the input. */
    setRef: PropTypes.func,
    /** Hides the validation message under the defined conditions. */
    hideValidity: PropTypes.func,
    /** Validates the input based on the provided logic. */
    isValid: PropTypes.func,
    /** Forces the input into an error state. */
    error: PropTypes.bool,
    /** Additional class names to apply to the container. */
    className: PropTypes.string,
    /** Sanitizes the input when passed back by the onChange handler. */
    sanitize: PropTypes.bool,
    /** Optional inline styles. */
    style: PropTypes.objectOf(PropTypes.string),
  }),
};

TooltipInput.defaultProps = {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  lightLabel: true,
  clearStateOnConfirm: true,
};

export default TooltipInput;
