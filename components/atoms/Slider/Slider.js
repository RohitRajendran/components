/** @module Slider */
import React, {memo} from 'react';
import ReactSlider from 'rc-slider';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
  const tooltipStickyClasses = classNames({
    show: tooltipStickyPosition && tooltipStickyPosition !== value,
    [`${tooltipStickyVariant}`]: tooltipStickyVariant,
    'tooltip-sticky-hint': true,
    [`tooltip-position-${tooltipStickyPosition}`]: true,
  });
  const containerClasses = classNames(
    {
      [`highlighted-${tooltipStickyVariant}`]:
        tooltipStickyVariant &&
        tooltipStickyPosition &&
        tooltipStickyPosition === value,
      'slider-wrapper': true,
    },
    className
  );
  const markers = _.fromPairs(_.range(1, 11).map((x) => [x, x]));

  const handleChange = (newValue) => {
    return onChange(name, newValue);
  };

  return (
    <div className={containerClasses}>
      {tooltipStickyVariant && (
        <style>
          {`
        .rc-slider-mark-text:nth-of-type(${tooltipStickyPosition}) {
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
        .rc-slider-handle[aria-valuenow="${tooltipStickyPosition}"] {
          height: 20px !important;
          width: 20px !important;
          margin-left: -10px !important;
        }
        `}
        </style>
      )}
      {tooltip && (
        <div className={`tooltip tooltip-position-${value}`}>{tooltip}</div>
      )}

      {leftAnnotate && <div className="left-annotate">{leftAnnotate}</div>}
      {rightAnnotate && <div className="right-annotate">{rightAnnotate}</div>}
      <div className={tooltipStickyClasses} />
      <ReactSlider
        className="react-slider"
        name={name}
        value={value}
        onChange={handleChange}
        min={1}
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
  onChange: PropTypes.func,
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
  tooltipStickyVariant: PropTypes.oneOf(['green', 'orange', 'purple']),
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Determines if the input is required or not. */
  required: PropTypes.bool,
};

export default memo(Slider);
export {Slider as PureSlider};
