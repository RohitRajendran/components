/** @module ItemizationWidget */
import {and} from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {animated, Spring} from 'react-spring/renderprops.cjs';
import TooltipInput from '~components/molecules/TooltipInput/TooltipInput';
import {isDocumentDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import {formatCurrencyNoDecimal} from '~components/utilities/FormatUtils/FormatUtils';
import {exclusive} from '~proptypes';
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
    if (isDocumentDefined()) {
      document.body.classList.add('uic-itemization-widget--present');
    }

    this.determineError();
  }

  /** @inheritdoc */
  componentDidUpdate() {
    this.determineError();
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (isDocumentDefined()) {
      document.body.classList.remove('uic-itemization-widget--present');
    }
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
          if (total >= item.threshold) {
            this.setState({
              warning: true,
              thresholdWarning: item.thresholdWarning,
            });
          }
        } else if (item.value >= item.threshold) {
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
    const {
      title,
      values,
      totalSuffix,
      className,
      style,
      totalLabel,
    } = this.props;
    const completeTotal = formatCurrencyNoDecimal(this.sumTotal(values));

    const containerClasses = classNames(
      {
        'uic--itemization-widget': true,
        'uic--itemization-widget-threshold':
          this.state.warning && !this.state.open,
      },
      className,
    );

    const containerThresholdWarningClasses = classNames({
      'uic--itemization-widget__threshold-warning': true,
      'uic--d-xl-none': true,
      'uic--d-none': this.state.thresholdWarning && this.state.open,
    });

    return (
      <Spring native to={{start: this.state.open ? 0.85 : 0}}>
        {({start}) => (
          <animated.div
            className="uic--itemization-widget__wrapper"
            style={{
              background: start.interpolate((o) => `rgba(0, 0, 0, ${o})`),
              height: `${this.state.open ? '100' : '0'}%`,
            }}
            tabIndex="0"
            onClick={this.state.open ? this.handleClick : null}
            onKeyPress={this.state.open ? this.handleClick : null}
          >
            <div
              className={containerClasses}
              style={style}
              role="presentation"
              onClick={this.handleClick}
              onKeyPress={this.handleClick}
            >
              <div className="uic--itemization-widget__item uic--itemization-widget__title">
                <div className="uic--row">
                  <div className="uic--col-6">{title}</div>

                  <div
                    className="uic--col-6 uic--text-right uic--d-xl-none"
                    data-cy={title}
                  >
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

              <Spring
                force
                native
                config={{tension: 2000, friction: 100, precision: 1}}
                from={{height: this.state.open ? 0 : 'auto'}}
                to={{height: this.state.open ? 'auto' : 0}}
              >
                {(animationStyle) => (
                  <animated.div
                    className="uic--itemization-widget__item-container"
                    style={animationStyle}
                    onClick={this.handleClick}
                  >
                    {values.map(
                      (
                        {
                          value,
                          label,
                          items,
                          description,
                          threshold,
                          thresholdWarning,
                          suffix: itemSuffix,
                          editConfig,
                        },
                        index,
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
                              items ? this.sumTotal(items) : value || 0,
                            )}
                            {itemSuffix && (
                              <span className="uic--itemization-widget__suffix">
                                {' '}
                                /{itemSuffix}
                              </span>
                            )}
                            <div className="uic--itemization-widget__label">
                              {label}
                            </div>
                            {editConfig && (
                              <div className="uic--itemization-tooltip">
                                <TooltipInput
                                  label={editConfig.label || 'Edit Total'}
                                  labelVariant="link"
                                  placement="bottom"
                                  confirmLabel="Save"
                                  lightLabel={false}
                                  {...editConfig}
                                />
                              </div>
                            )}
                            {items && (
                              <div className="uic--itemization-widget__itemized-container">
                                {items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="uic--itemization-widget__itemized"
                                  >
                                    <div className="uic--itemization-widget__itemized-value">
                                      {formatCurrencyNoDecimal(item.value)}
                                    </div>

                                    {item.label && (
                                      <div className="uic--itemization-widget__label">
                                        {item.label}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            {thresholdWarning &&
                            threshold &&
                            (items ? this.sumTotal(items) : value) >=
                              threshold ? (
                              <div className="uic--itemization-widget__threshold-warning">
                                {thresholdWarning}
                              </div>
                            ) : description ? (
                              <div className="uic--itemization-widget__description">
                                {description}
                              </div>
                            ) : null}
                          </div>
                        );
                      },
                    )}
                  </animated.div>
                )}
              </Spring>
              <div
                className="uic--itemization-widget__item uic--itemization-widget__total uic--itemization-widget__title uic--d-none uic--d-xl-block"
                data-cy={title}
              >
                {completeTotal}
                {totalSuffix && (
                  <span className="uic--itemization-widget__suffix">
                    {' '}
                    /{totalSuffix}
                  </span>
                )}
                <div className="uic--itemization-widget__label">
                  {totalLabel}
                </div>
              </div>
            </div>
          </animated.div>
        )}
      </Spring>
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
  /** Overrides the total label */
  totalLabel: PropTypes.string,
  /** An array of items to itemize. */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      /** The label to appear above the item. */
      label: PropTypes.string.isRequired,
      /** Optional description label to display beneath the item.. */
      description: PropTypes.string,
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
            /** Determines if the item should be itemized or not. */
          }),
        ),
        exclusive(['value']),
      ]),
      /** Shows and configures edit tooltip for the value */
      editConfig: PropTypes.shape({
        /** Label text for the edit link */
        label: PropTypes.string,
        /** Function which fires when the user confirms the input. */
        onConfirm: PropTypes.func,
        /** Config object for the input field. */
        config: PropTypes.shape({
          /** A string or symbol to append to the end of the input. For example `%`. Automatically applied for percentage masks. */
          append: PropTypes.string,
          /** Determines the autoComplete type on the input. */
          autoComplete: PropTypes.string,
          /** A string or symbol to pre-pend to the start of the input. For example `$`. Automatically applied for currency masks. */
          prepend: PropTypes.string,
          /** The label representing the input field. */
          label: PropTypes.string.isRequired,
          /** The name of the input field. */
          name: PropTypes.string.isRequired,
          /** The description of the input field. Displayed separately to the label. */
          description: PropTypes.string,
          /** The type of input field. */
          type: PropTypes.oneOf([
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'month',
            'number',
            'password',
            'search',
            'tel',
            'text',
            'time',
            'url',
            'week',
          ]),
        }),
      }),
    }),
  ).isRequired,
};

ItemizationWidget.defaultProps = {
  totalLabel: 'Total',
};

export default ItemizationWidget;
