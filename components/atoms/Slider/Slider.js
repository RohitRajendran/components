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
  step,
  tooltip,
  leftAnnotate,
  rightAnnotate,
  tooltipStickyPosition,
  tooltipStickyHint,
}) => {
  const tooltipClasses = classNames(`tooltip tooltip-position-${value}`);
  const tooltipStickyClasses = classNames(
    {
      show: tooltipStickyPosition !== value,
    },
    `tooltip-sticky-hint tooltip-position-${tooltipStickyPosition} green-star`
  );
  const wrapperClasses = classNames(
    {
      highlighted: tooltipStickyPosition && tooltipStickyPosition === value,
    },
    'slider-wrapper'
  );
  const markers = _.fromPairs(_.range(1, 11).map((x) => [x, x]));

  return (
    <div className={wrapperClasses}>
      <style>
        {`
            .rc-slider-mark-text:nth-of-type(${tooltipStickyPosition}) {
                color: #008422 !important;
              }`}
      </style>
      {tooltip && <div className={tooltipClasses}>{tooltip}</div>}

      {leftAnnotate && <div className="left-annotate">{leftAnnotate}</div>}
      {rightAnnotate && <div className="right-annotate">{rightAnnotate}</div>}
      <div className={tooltipStickyClasses}>{tooltipStickyHint}</div>
      <ReactSlider
        name={name}
        value={value}
        onChange={onChange}
        min={1}
        max={10}
        marks={markers}
        step={step}
        included={false}
      />
    </div>
  );
};

Slider.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  marks: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  value: PropTypes.number,
  step: PropTypes.number,
  tooltip: PropTypes.node,
  leftAnnotate: PropTypes.node,
  rightAnnotate: PropTypes.node,
  tooltipStickyPosition: PropTypes.number,
  tooltipStickyHint: PropTypes.string,
};

Slider.defaultProps = {
  min: 0,
  max: 10,
  step: 1,
};

export default Slider;
