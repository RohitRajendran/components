/** @module Box */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import requiredIf from 'react-required-if';
import './Box.scss';

/** Displays content within a simple box with an icon, label, and description. */
class Box extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  /** Handles the click event within the box.
   * @param {object} event - The event object.
   * @returns {undefined}
   */
  handleClick(event) {
    event.stopPropagation();

    if (this.props.onClick) {
      return this.props.onClick(this.props.value);
    }
  }

  /** Handles the hover event.
   * @returns {undefined}
   */
  handleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  /** @inheritdoc */
  render() {
    const {className, description, icon, label, selected, style} = this.props;

    const containerClasses = classNames(
      {
        'uic--box': true,
        'uic--text-center': true,
        'uic--box-highlighted': selected,
        'uic--box-hover': this.state.hover,
      },
      className
    );

    const BoxIcon = icon ? icon : null;

    return (
      <div
        className={containerClasses}
        style={style}
        role="button"
        tabIndex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        {BoxIcon && (
          <BoxIcon
            className="uic--box-illustration"
            illuminate={selected || this.state.hover}
            height="10rem"
            width="10rem"
            color
          />
        )}
        {label && <h3 className="uic--box-header">{label}</h3>}
        {description && <p className="uic--box-description">{description}</p>}
      </div>
    );
  }
}

Box.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** The title to appear on the box. */
  label: PropTypes.string,
  /** The description to appear on the box. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Determines if the box is selected or not. */
  selected: PropTypes.bool,
  /** The icon to display at the top of the card. */
  icon: PropTypes.node,
  /** Optional onClick handler which passes back the name and the id of the selected box. */
  onClick: PropTypes.func,
  /** The value of the selection. Only applicable if using an onClick handler. */
  value: requiredIf(PropTypes.string, (props) => props.onClick),
};

export default Box;
