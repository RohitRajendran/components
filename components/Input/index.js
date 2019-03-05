import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return <input className="form" aria-label="" value={this.state.value} />;
  }
}

Input.propTypes = {
  value: '',
};

export default Input;
