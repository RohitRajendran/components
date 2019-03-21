/** @module Slider */
import React from 'react';
import ReactSlider from 'rc-slider';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
}) => {
  const tooltipClasses = classNames(`tooltip tooltip-position-${value}`);
  const tooltipStickyClasses = classNames(
    {
      show: tooltipStickyPosition && tooltipStickyPosition !== value,
      [`${tooltipStickyVariant}`]: tooltipStickyVariant,
    },
    `tooltip-sticky-hint tooltip-position-${tooltipStickyPosition}`
  );
  const wrapperClasses = classNames(
    {
      [`highlighted-${tooltipStickyVariant}`]:
        tooltipStickyVariant &&
        tooltipStickyPosition &&
        tooltipStickyPosition === value,
    },
    'slider-wrapper'
  );
  const markers = _.fromPairs(_.range(1, 11).map((x) => [x, x]));

  return (
    <div className={wrapperClasses}>
      {tooltipStickyVariant && (
        <style>
          {`
        .rc-slider-mark-text:nth-of-type(${tooltipStickyPosition}) {
          color: ${
            tooltipStickyVariant === 'green' ? '#008422' : '#d16b08'
          } !important;
      }`}
        </style>
      )}
      {tooltip && <div className={tooltipClasses}>{tooltip}</div>}

      {leftAnnotate && <div className="left-annotate">{leftAnnotate}</div>}
      {rightAnnotate && <div className="right-annotate">{rightAnnotate}</div>}
      <div className={tooltipStickyClasses} />
      <ReactSlider
        name={name}
        value={value}
        onChange={(val) => onChange && onChange(name, val)}
        min={1}
        max={10}
        step={1}
        marks={markers}
        included={false}
      />
    </div>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.number,
  tooltip: PropTypes.node,
  leftAnnotate: PropTypes.node,
  rightAnnotate: PropTypes.node,
  tooltipStickyPosition: PropTypes.number,
  tooltipStickyVariant: PropTypes.oneOf(['green', 'orange']),
};

export default Slider;
