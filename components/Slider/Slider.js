/** @module Slider */
import React, {Component} from 'react';

/** Displays a slider. */
class Slider extends Component {

  /** @inheritdoc */
  render() {

    const {
      name,
      min,
      max,
      step,
      value,
      required
    } = this.props;

    return (
      <fieldset>
        <input 
          type="range" 
          name={name} 
          min={min}
          max={max}
          step={step} 
          value={value}
          required={required}>
        </input>
      </fieldset>
    )
  }
}

export default Slider;