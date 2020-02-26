/** @module InfoBox */
import React, {Component} from 'react';
import './InfoBox.scss';
import classNames from 'classnames';
import {formatEllipsis} from '../../utilities/FormatUtils/FormatUtils';

type InfoBoxProps = {
  /** The main title that will displayed near the top of our InfoBox. */
  title: string;
  /** Optional number of characters to limit the title to before styling it as an ellipsis. */
  titleCharLimit?: number;
  /** The content JSX to be displayed below the title. */
  content: React.ReactNode;
  /** Optional image URL string to place in your InfoBox - we use the URL to create an image that appears to the right of the title. */
  imageURL?: string;
  /** Optional footer JSX to be displayed below the content. */
  footer?: React.ReactNode;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Optional onClick handler. */
  onClick?: (val?: string) => void;
};

/**
 * Renders a basic card with a title component on top and
 * description/more information below the title portion.
 */
class InfoBox extends Component<InfoBoxProps, {showFullTitle: boolean}> {
  /** @inheritdoc */
  public static defaultProps = {
    titleCharLimit: 25,
  };

  /** @inheritdoc */
  constructor(props: InfoBoxProps) {
    super(props);

    this.state = {
      showFullTitle: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  /**
   * Handles the click event within the box.
   */
  handleClick(event: React.MouseEvent | React.KeyboardEvent): void {
    event.stopPropagation();

    if (this.props.onClick) {
      return this.props.onClick();
    }
  }

  /**
   * Handles our mouseEnter event.
   */
  handleMouseOver(event: React.MouseEvent): void {
    event.stopPropagation();

    if (this.props.title.length > (this.props.titleCharLimit as number)) {
      this.setState({
        showFullTitle: true,
      });
    }
  }

  /**
   * Handles our mouseOut event.
   */
  handleMouseOut(event: React.MouseEvent): void {
    event.stopPropagation();

    if (this.state.showFullTitle) {
      this.setState({
        showFullTitle: false,
      });
    }
  }

  /** @inheritdoc */
  render(): JSX.Element {
    const {
      title,
      titleCharLimit,
      content,
      imageURL,
      footer,
      className,
      style,
    } = this.props;
    const containerClass = classNames(
      {
        'uic--info-box': true,
        'uic--info-box-expand': this.state.showFullTitle,
        'uic--info-box-selectable': this.props.onClick,
      },
      className,
    );

    return (
      <aside
        className={containerClass}
        style={style}
        role={this.props.onClick ? 'button' : undefined}
        tabIndex={this.props.onClick ? 0 : undefined}
        onKeyDown={this.props.onClick ? this.handleClick : undefined}
        onClick={this.props.onClick ? this.handleClick : undefined}
      >
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
            style={
              imageURL
                ? {
                    backgroundImage: `url(${imageURL})`,
                  }
                : {}
            }
            onMouseEnter={this.handleMouseOver}
          >
            <div className="uic--info-box-title-text uic--header-2-text">
              {title ? formatEllipsis(title, titleCharLimit as number) : ''}
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

export default InfoBox;
