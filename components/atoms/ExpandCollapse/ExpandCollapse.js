import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ExpandyCircleIcon from '~components/atoms/icons/ExpandyCircleIcon/ExpandyCircleIcon';

import './ExpandCollapse.scss';

/** Expand/Collapse component used for cabinet and card content.  */
class ExpandCollapse extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openExpandItem = this.openExpandItem.bind(this);
  }

  /** Toggles the expand.
   * @returns {undefined}
   **/
  openExpandItem() {
    this.setState({open: !this.state.open});
  }

  /** @inheritdoc */
  render() {
    const {label, children} = this.props;

    const contentClasses = classNames({
      'open': this.state.open,
      'closed': !this.state.open,
    });

    const iconClasses = classNames({
      'uic--ec-controls-expanded': this.state.open,
      'uic--ec-controls': true,
    })

    return (
      <div
        className={`uic--ec uic--position-relative`}
      >
        <div 
          className="uic--d-flex uic--align-items-center" 
          onClick={this.openExpandItem} 
          onKeyPress={this.openExpandItem}>
          <ExpandyCircleIcon
            className={iconClasses}
            width="2.4rem"
            height="2.4rem" />
          <div className="uic--ec-label">
            {label}
          </div>
        </div>

        <div className="uic--ec-content">
          <div className={contentClasses}> {children} </div>
      
        </div>
      </div>
    );
  }
}

ExpandCollapse.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOfType(['circle', 'arrow']),
  children: PropTypes.node,
};

export default ExpandCollapse;
