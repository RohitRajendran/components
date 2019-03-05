import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }

    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus() {
    this.setState({isActive: !this.state.isActive});
  }
  render() {
    return (
    <div 
      className={`mcgonagall-input input-append ${this.state.isActive ? 'focus' : ''}`}
      data-value={this.props.value}
      >
      <label>Amount ($)</label>
      <input 
        className=""
        aria-label="" 
        value={this.props.value}
        onFocus={this.toggleFocus} 
        onBlur={this.toggleFocus}
        >
      </input>
    </div>
    )
  }
}

Input.propTypes = {
  value: '',
  label: '',

};

export default Input;
