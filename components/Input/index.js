import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/** Renders an Input field. */
class Input extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      value: null,
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  /** Handles the focus toggling in cases where the default HTML behavior doesn't cut it.
   * @returns {undefined}
   */
  toggleFocus() {
    this.setState({isActive: !this.state.isActive});
  }

  /** Updates the data-value part of the component, used for input prepending.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  updateValue(event) {
    this.setState({value: event.target.value});
  }

  /** @inheritdoc */
  render() {
    const {append, prepend, name, type} = this.props;

    const attributes = {
      name,
      type,
    };

    return (
      <div
        className={`mcgonagall-input ${
          append ? 'input-append' : prepend ? 'input-prepend' : null
        } ${this.state.isActive ? 'focus' : ''}`}
        data-value={this.state.value}
      >
        <label>{this.props.label}</label>
        <input
          type="text"
          className=""
          aria-label={this.props.label}
          onChange={this.updateValue}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          {...attributes}
        />
        <div className="validation-error" />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  append: PropTypes.bool,
  prepend: PropTypes.bool,
  name: PropTypes.name,
  type: PropTypes.string,
};

export default Input;
