/** @module ItemizationWidget */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {exclusive} from '~proptypes';
import {and} from 'airbnb-prop-types';
import {formatCurrencyNoDecimal} from '~components/utilities/FormatUtils/FormatUtils';

import './ItemizationWidget.scss';

/** Renders the ItemizationWidget component. */
class ItemizationWidget extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      warning: false,
      thresholdWarning: '',
    };

    this.determineError = this.determineError.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    this.determineError();
  }

  /** @inheritdoc */
  componentDidUpdate() {
    this.determineError();
  }

  /** Toggles the visibility state of the itemization component for mobile devices.
   * @returns {undefined}
   */
  handleClick() {
    this.setState({open: !this.state.open});
  }

  /** Determines if the widget is in a warning state or not.
   * @returns {undefined}
   */
  determineError() {
    return this.props.values
      .filter((item) => item.threshold)
      .map((item) => {
        if (item.items) {
          const total = this.sumTotal(item.items);

          if (total >= item.threshold && !this.state.warning) {
            this.setState({
              warning: true,
              thresholdWarning: item.thresholdWarning,
            });
          }
        } else if (item.value >= item.threshold && !this.state.warning) {
          this.setState({
            warning: true,
            thresholdWarning: item.thresholdWarning,
          });
        }
      });
  }

  /** Sums the 'items' and 'value' properties to form a group total.
   * @param {array} values - The values to itemize.
   * @returns {integer} - Returns the sum.
   */
  sumTotal(values) {
    return values.reduce((acc, obj) => {
      let accumulator = acc;
      accumulator += obj.value || 0;
      accumulator += obj.items
        ? obj.items.reduce((a, o) => {
            return 'value' in o ? o.value + a : a;
          }, 0)
        : 0;
      return accumulator;
    }, 0);
  }

  /** @inheritdoc */
  render() {
    const {title, values, totalSuffix, className, style} = this.props;
    const completeTotal = formatCurrencyNoDecimal(this.sumTotal(values));

    const containerClasses = classNames(
      {
        'uic--itemization-widget': true,
        'uic--itemization-widget-threshold':
          this.state.warning && !this.state.open,
      },
      className
    );

    const containerThresholdWarningClasses = classNames({
      'uic--itemization-widget__threshold-warning': true,
      'uic--d-sm-none': true,
      'uic--d-none': this.state.open,
    });

    const itemContainerClasses = classNames({
      'uic--d-sm-block': true,
      'uic--d-none': !this.state.open,
    });

    return (
      <div
        className={containerClasses}
        style={style}
        role="button"
        tabIndex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
      >
        <div className="uic--itemization-widget__item uic--itemization-widget__title">
          <div className="uic--row uic--align-items-center">
            <div className="uic--col-6">{title}</div>

            <div className="uic--col-6 uic--text-right uic--d-sm-none">
              {completeTotal}
              {totalSuffix && (
                <span className="uic--itemization-widget__suffix">
                  {' '}
                  /{totalSuffix}
                </span>
              )}
              <div className="uic--itemization-widget__label">Total</div>
            </div>
          </div>
          <div className={containerThresholdWarningClasses}>
            {this.state.thresholdWarning}
          </div>
        </div>

        <div className={itemContainerClasses}>
          {values.map(
            (
              {
                value,
                label,
                items,
                threshold,
                thresholdWarning,
                suffix: itemSuffix,
              },
              index
            ) => {
              const itemClasses = classNames({
                'uic--itemization-widget__item': true,
                'uic--itemization-widget__item-calc': true,
                'uic--itemization-widget__item-threshold':
                  threshold &&
                  (items ? this.sumTotal(items) : value) >= threshold,
              });
              return (
                <div key={index} className={itemClasses}>
                  {formatCurrencyNoDecimal(
                    items ? this.sumTotal(items) : value || 0
                  )}
                  {itemSuffix && (
                    <span className="uic--itemization-widget__suffix">
                      {' '}
                      /{itemSuffix}
                    </span>
                  )}
                  <div className="uic--itemization-widget__label">{label}</div>
                  {items &&
                    items.map((item, idx) => (
                      <div
                        key={idx}
                        className="uic--itemization-widget__itemized"
                      >
                        {item.value && (
                          <div className="uic--itemization-widget__itemized-value">
                            {formatCurrencyNoDecimal(item.value)}
                          </div>
                        )}

                        {item.label && (
                          <div className="uic--itemization-widget__label">
                            {item.label}
                          </div>
                        )}
                      </div>
                    ))}
                  {thresholdWarning &&
                    threshold &&
                    (items ? this.sumTotal(items) : value) >= threshold && (
                      <div className="uic--itemization-widget__threshold-warning">
                        {thresholdWarning}
                      </div>
                    )}
                </div>
              );
            }
          )}
        </div>
        <div className="uic--itemization-widget__item uic--itemization-widget__title uic--d-none uic--d-sm-block">
          {completeTotal}
          {totalSuffix && (
            <span className="uic--itemization-widget__suffix">
              {' '}
              /{totalSuffix}
            </span>
          )}
          <div className="uic--itemization-widget__label">Total</div>
        </div>
      </div>
    );
  }
}

ItemizationWidget.propTypes = {
  /** The title to appear above the widget. */
  title: PropTypes.string.isRequired,
  /** Determines the suffix to append to the total. For example 'mo' or 'yr'. */
  totalSuffix: PropTypes.string,
  /** Optional class names to apply to the container. */
  className: PropTypes.string,
  /** Optional inline styles to apply to the container. */
  style: PropTypes.shape(PropTypes.string),
  /** An array of items to itemize. */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      /** The label to appear above the item. */
      label: PropTypes.string.isRequired,
      /** The value of the item. */
      value: and([PropTypes.number, exclusive(['items'])]),
      /** The suffix to append to the end of the item. For example 'mo' or 'yr'. */
      suffix: PropTypes.string,
      /** The numeric threshold of the item before it transitions into the warning (orange) state. */
      threshold: PropTypes.number,
      /** The threshold warning error to show when the threshold is met. */
      thresholdWarning: PropTypes.string,
      /** Itemization items to appear as a child of the item. */
      items: and([
        PropTypes.arrayOf(
          PropTypes.shape({
            /** The value of the item. */
            value: PropTypes.number.isRequired,
            /** The label of the item. */
            label: PropTypes.string.isRequired,
          })
        ),
        exclusive(['value']),
      ]),
    })
  ).isRequired,
};

export default ItemizationWidget;
