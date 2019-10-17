/** @module BoxSelect */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import Box from '~components/atoms/Box/Box';
import './BoxSelect.scss';

/** Displays a grid of box components.  */
class BoxSelect extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };

    this.contentNode = createRef();
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  /** Handles the toggle interaction between items in the select group.
   * @param {string} value - The name of the value.
   * @returns {undefined}
   */
  toggleSelected(value) {
    const {name, onChange} = this.props;

    // Passes back the currently selected item to the parent.
    if (onChange && name) {
      onChange(name, value);
    }
  }

  /** @inheritdoc */
  componentDidMount() {
    if (this.contentNode && this.contentNode.current) {
      const components = this.contentNode.current.getElementsByClassName(
        'uic--box'
      );

      // Ensures that each box in the grid remains at a consistent height.
      if (components) {
        let minHeight = 0;
        components.forEach((item) => {
          const height = item.offsetHeight;

          if (height >= minHeight) {
            minHeight = height;
          }
        });

        this.setState({
          height: minHeight,
        });
      }
    }
  }

  /** @inheritdoc */
  render() {
    const {className, style, options, value} = this.props;

    const containerClasses = classNames(
      {
        'uic--box-select': true,
        'uic--row': true,
        'uic--h-100': true,
      },
      className
    );

    return (
      <div className={containerClasses} style={style} ref={this.contentNode}>
        {options.map((item) => (
          <div
            key={item.value}
            className="uic--col-6 uic--col-sm-4"
            style={{minHeight: this.state.height}}
          >
            <Box
              {...item}
              className="uic--h-100"
              onClick={this.toggleSelected}
              selected={value === item.value}
            />
          </div>
        ))}
      </div>
    );
  }
}

BoxSelect.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** The select options to appear within the box. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** The value of the select button, for example `yes` or `no`. */
      value: PropTypes.string.isRequired,
      /** The label to appear on the box. */
      label: PropTypes.string,
      /** The description to appear on the box. */
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      /** The icon to display at the top of the card. */
      icon: PropTypes.node,
      /** Shows check icon */
      showCheck: PropTypes.bool,
      /** Disables the box */
      disabled: PropTypes.bool,
    })
  ).isRequired,
  /** The name of the box group. Gets passed back when the onClick handler is triggered. */
  name: PropTypes.string.isRequired,
  /** Handler which gets initiated every time a selection is made. Passes back the selection group name and the value. */
  onChange: PropTypes.func.isRequired,
  /** The item that is currently selected. */
  value: PropTypes.string,
};

export default BoxSelect;
