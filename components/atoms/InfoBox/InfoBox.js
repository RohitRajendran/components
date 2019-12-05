/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/** @module InfoBox */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './InfoBox.scss';
import classNames from 'classnames';
import {formatEllipsis} from '../../utilities/FormatUtils/FormatUtils';

/**
 * Renders a basic card with a title component on top and
 * description/more information below the title portion.
 */
class InfoBox extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      showFullTitle: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  /** Handles the click event within the box.
   * @param {object} event - The event object.
   * @returns {function} Function to be ran
   */
  handleClick(event) {
    event.stopPropagation();

    if (this.props.onClick) {
      return this.props.onClick();
    }
  }

  /**
   * Handles our mouseEnter event.
   * @param {Event} event - Event obj
   * @returns {undefined}
   */
  handleMouseOver(event) {
    event.stopPropagation();

    if (this.props.title.length > this.props.titleCharLimit) {
      this.setState({
        showFullTitle: true,
      });
    }
  }

  /**
   * Handles our mouseOut event.
   * @param {Event} event - Event obj
   * @returns {undefined}
   */
  handleMouseOut(event) {
    event.stopPropagation();

    if (this.state.showFullTitle) {
      this.setState({
        showFullTitle: false,
      });
    }
  }

  /** @inheritdoc */
  render() {
    const {
      title,
      titleCharLimit,
      content,
      imageURL,
      footer,
      className,
      style,
    } = this.props;
    const imgStyle = {};
    const containerClass = classNames(
      {
        'uic--info-box': true,
        'uic--info-box-expand': this.state.showFullTitle,
        'uic--info-box-selectable': this.props.onClick,
      },
      className,
    );
    const containerProps = {
      className: containerClass,
      style,
    };

    if (imageURL) {
      imgStyle.backgroundImage = `url(${imageURL})`;
    }

    if (this.props.onClick) {
      containerProps.onClick = this.handleClick;
      containerProps.role = 'button';
      containerProps.tabIndex = 0;
      containerProps.onKeyDown = this.handleClick;
    }

    return (
      <aside {...containerProps}>
        <div
          className="uic--position-relative"
          onMouseLeave={this.handleMouseOut}
        >
          {this.state.showFullTitle && (
            <div className="uic--info-box-title-text uic--header-2-text">
              {title}
            </div>
          )}
          <div
            className="uic--info-box-title-area"
            style={imgStyle}
            onMouseEnter={this.handleMouseOver}
          >
            <div className="uic--info-box-title-text uic--header-2-text">
              {formatEllipsis(title, titleCharLimit)}
            </div>
          </div>
          <div className="uic--info-box-information-area">
            {content}
            {footer && (
              <footer>
                <hr />
                {footer}
              </footer>
            )}
          </div>
        </div>
      </aside>
    );
  }
}

InfoBox.propTypes = {
  /** The main title that will displayed near the top of our InfoBox. */
  title: PropTypes.string.isRequired,
  /** Optional number of characters to limit the title to before styling it as an ellipsis. */
  titleCharLimit: PropTypes.number,
  /** The content JSX to be displayed below the title. */
  content: PropTypes.node.isRequired,
  /** Optional image URL string to place in your InfoBox - we use the URL to create an image that appears to the right of the title. */
  imageURL: PropTypes.string,
  /** Optional footer JSX to be displayed below the content. */
  footer: PropTypes.node,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Optional onClick handler. */
  onClick: PropTypes.func,
};

InfoBox.defaultProps = {
  titleCharLimit: 25,
};

export default InfoBox;
