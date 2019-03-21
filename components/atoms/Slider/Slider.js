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
  const wrapperClasses = classNames(
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
    <div className={wrapperClasses}>
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
      }`}
        </style>
      )}
      {tooltip && (
        <div className={`tooltip tooltip-position-${value}`}>{tooltip}</div>
      )}

      {leftAnnotate && <div className="left-annotate">{leftAnnotate}</div>}
      {rightAnnotate && <div className="right-annotate">{rightAnnotate}</div>}
      <div className={tooltipStickyClasses} />
      <ReactSlider
        name={name}
        value={value}
        onChange={onChange && handleChange}
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.number,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  leftAnnotate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightAnnotate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tooltipStickyPosition: PropTypes.number,
  tooltipStickyVariant: PropTypes.oneOf(['green', 'orange', 'purple']),
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default memo(Slider);
