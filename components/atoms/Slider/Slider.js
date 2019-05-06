/** @module Slider */
import React, {memo} from 'react';
import ReactSlider from 'rc-slider';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import fromPairs from 'lodash/fromPairs';
import {dsmColors as colors} from '~constants/js/colors';

import './Slider.scss';

const Slider = ({
  name,
  onChange,
  value,
  tooltip,
  leftAnnotate,
  rightAnnotate,
  tooltipStickyPosition,
  tooltipStickyVariant,
  className,
  required,
}) => {
  const tooltipStickyPositionStr =
    tooltipStickyPosition && tooltipStickyPosition.toString();
  const valueStr = value && value.toString();
  const tooltipStickyClasses = classNames({
    'uic--show': tooltipStickyPosition && tooltipStickyPositionStr !== valueStr,
    [`uic--${tooltipStickyVariant}`]: tooltipStickyVariant,
    'uic--tooltip-sticky-hint': true,
    [`uic--tooltip-position-${tooltipStickyPosition}`]: true,
    'uic--position-absolute': true,
  });
  const containerClasses = classNames(
    {
      [`uic--highlighted-${tooltipStickyVariant}`]:
        tooltipStickyVariant &&
        tooltipStickyPosition &&
        tooltipStickyPositionStr === valueStr,
      'uic--slider-wrapper': true,
      'uic--position-relative': true,
    },
    className
  );

  const range = Array.from({length: 11}, (v, i) => i);
  const markers = fromPairs(range.map((x) => [x, x]));

  const handleChange = (newValue) => {
    return onChange(name, newValue.toString());
  };

  return (
    <div className={containerClasses}>
      {tooltipStickyVariant && (
        <style>
          {`
        .rc-slider-mark-text:nth-of-type(${tooltipStickyPosition + 1}) {
          color: ${
            tooltipStickyVariant === 'green'
              ? colors.green
              : tooltipStickyVariant === 'orange'
              ? colors.orange
              : colors.royal
          } !important;
        }
        `}
        </style>
      )}

      {tooltipStickyPosition && (
        <style>
          {`
        .rc-slider-handle[aria-valuenow="${tooltipStickyPosition + 1}"] {
          height: 20px !important;
          width: 20px !important;
          margin-left: -10px !important;
          margin-top: -9px !important;
        }
        `}
        </style>
      )}
      {tooltip && (
        <div
          className={`uic--tooltip uic--tooltip-position-${value} uic--position-absolute`}
        >
          {tooltip}
        </div>
      )}

      {leftAnnotate && (
        <div className="uic--left-annotate-container uic--position-absolute">
          <div className="uic--left-annotate">{leftAnnotate}</div>
        </div>
      )}
      {rightAnnotate && (
        <div className="uic--right-annotate-container uic--position-absolute">
          <div className="uic--right-annotate">{rightAnnotate}</div>
        </div>
      )}
      <div className={tooltipStickyClasses} />
      <ReactSlider
        className="uic--react-slider"
        name={name}
        value={value}
        onChange={handleChange}
        min={0}
        max={10}
        step={1}
        marks={markers}
        included={false}
        required={required}
      />
    </div>
  );
};

Slider.propTypes = {
  /** The name of the component. */
  name: PropTypes.string.isRequired,
  /** Passes back the current value and the name of the slider on change. */
  onChange: PropTypes.func.isRequired,
  /** The current value of the slider. */
  value: PropTypes.number,
  /** Data to display inside of the tooltip. */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Text to display to the left of the slider. */
  leftAnnotate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Text to display to the right of the slider. */
  rightAnnotate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Shows a ghost dot on the slider, set the position between 1 and 10. */
  tooltipStickyPosition: PropTypes.number,
  /** Determines which variant to set the slider to, can either be set to null, green or orange. */
  tooltipStickyVariant: PropTypes.oneOf(['green', 'purple']),
  /** Applies  */
  className: PropTypes.string,
  /** Determines if the input is required or not. */
  required: PropTypes.bool,
};

export default memo(Slider);
export {Slider as PureSlider};
