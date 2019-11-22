/** @module ItemizationBox */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {createRef, PureComponent} from 'react';
import {animated, config, Spring} from 'react-spring/renderprops.cjs';
import Button from '~components/atoms/Button/Button';
import Tooltip from '~components/atoms/Tooltip/Tooltip';
import {formatCurrency} from '~components/utilities/FormatUtils/FormatUtils';
import './ItemizationBox.scss';

/** Displays a collapsible  box which itemizes and sums totals.  */
class ItemizationBox extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      height: props.isCollapsed ? 0 : '100%',
    };

    this.contentNode = createRef();
  }

  /** @inheritdoc */
  componentDidUpdate(prevProps) {
    // Toggles the height if the component was previously collapsed.
    if (prevProps.isCollapsed !== this.props.isCollapsed) {
      this.setState({
        height: this.props.isCollapsed
          ? 0
          : this.contentNode.current.scrollHeight,
      });
    }
  }

  /** Sums the 'items' and 'value' properties to form a group total.
   * @param {array} values - The values to itemize.
   * @returns {integer} - Returns the sum.
   */
  sumTotal(values) {
    return values.reduce((accumulator, obj) => accumulator + obj.value || 0, 0);
  }

  /** @inheritdoc */
  render() {
    const {className, style, label, buttonOptions, values} = this.props;
    const {height} = this.state;
    const total = this.sumTotal(values);

    const containerClasses = classNames(
      {
        'uic--itemization-box': true,
      },
      className,
    );

    const totalValueClasses = classNames({
      'uic--itemization-box__summary-total': true,
      'uic--itemization-box__total-negative': total < 0,
      'uic--itemization-box__total': true,
      'uic--col-6': true,
      'uic--text-right': true,
    });

    return (
      <div className={containerClasses} style={style}>
        <div className="uic--itemization-box__summary">
          <div className="uic--row uic--align-items-center">
            <div className="uic--itemization-box__summary-title uic--col-6">
              {label}
            </div>
            <div className={totalValueClasses}>{formatCurrency(total)}</div>
          </div>
        </div>

        <Spring
          native
          config={{...config.default, precision: 1}}
          from={{
            height,
          }}
          to={{
            height,
          }}
        >
          {(animationStyle) => (
            <animated.div style={{overflow: 'hidden', ...animationStyle}}>
              <div
                className="uic--itemization-box__itemizations uic--h-100"
                ref={this.contentNode}
              >
                {values.map((item, index) => {
                  const itemizationValueClasses = classNames({
                    'uic--itemization-box__itemizations-total': true,
                    'uic--itemization-box__total-negative': item.value < 0,
                    'uic--itemization-box__total': true,
                    'uic--col-4': true,
                    'uic--text-right': true,
                  });

                  return (
                    <div className="uic--row" key={index}>
                      {item.tooltip ? (
                        <div className="uic--col-8">
                          <div className="uic--row uic--align-items-center">
                            <div className="uic--itemization-box__itemizations-title uic--col-sm-6 uic--col-5">
                              {item.label}
                            </div>
                            <div className="uic--itemization-box__itemizations-tooltip__label uic--d-flex uic--col-sm-6 uic--col-7">
                              (
                              <Tooltip
                                label={item.tooltip.label}
                                labelVariant="link"
                                isDarkTooltip={true}
                                lightLabel={true}
                                placement="bottom"
                                hover={true}
                              >
                                {item.tooltip.description}
                              </Tooltip>
                              )
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="uic--itemization-box__itemizations-title uic--col-8">
                          {item.label}
                        </div>
                      )}
                      <div className={itemizationValueClasses}>
                        {formatCurrency(item.value)}
                      </div>
                    </div>
                  );
                })}

                <div className="uic--itemization-box__button uic--text-left">
                  {buttonOptions && (
                    <Button variant="link" to={buttonOptions.path} light>
                      {buttonOptions.label}
                    </Button>
                  )}
                </div>
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}

ItemizationBox.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Determines if the ItemizationBox component should be collapsed or not. */
  isCollapsed: PropTypes.bool,
  /** The header label for this itemization group. */
  label: PropTypes.string.isRequired,
  /** Assigns the call to action button. */
  buttonOptions: PropTypes.shape({
    /** The button label. */
    label: PropTypes.string.isRequired,
    /** The button path. */
    path: PropTypes.string.isRequired,
    /** Optional button component, allowing you to wrap the button in things such as react-router-dom's Link. */
    linkComponent: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]),
  }),
  /** An array of items to itemize. */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      /** The label to appear for this itemization. */
      label: PropTypes.string.isRequired,
      /** The value of the item. This can be a regular number or a negative number. */
      value: PropTypes.number.isRequired,
      tooltip: PropTypes.shape({
        /** The tooltip label. */
        label: PropTypes.string.isRequired,
        /** The tooltip description that appears when hovered over. */
        description: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default ItemizationBox;
