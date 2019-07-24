/** @module Tooltip */
import React, {memo} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '~components/atoms/Button/Button';
import ReactTooltip from 'react-tooltip';
import './Tooltip.scss';

/** Attaches a tooltip to a link or button on hover or press.
 * @returns {JSX} - Returns the JSX representation of the Tooltip component.
 */
const Tooltip = ({
  className,
  style,
  children,
  placement,
  label,
  labelVariant,
  lightLabel,
  isDarkTooltip,
  hover,
  tooltipRef,
}) => {
  const containerClasses = classNames(
    {
      'uic--tooltip': true,
      'uic--position-relative': true,
    },
    className
  );

  const tooltipClasses = classNames({
    'uic--tooltip-wrapper': true,
    'uic--tooltip-dark': isDarkTooltip,
  });

  // Unique identifier for the Tooltip.
  const id = Math.round(Math.random() * 10000000).toString();

  return (
    <span className={containerClasses} style={style}>
      <Button
        data-tip
        data-for={id}
        data-event={hover ? null : 'click'}
        variant={labelVariant}
        light={lightLabel}
        dark={!lightLabel}
      >
        {label}
      </Button>
      <ReactTooltip
        className={tooltipClasses}
        globalEventOff="click"
        id={id}
        place={placement}
        ref={tooltipRef || null}
        effect="solid"
        clickable={true}
      >
        {children}
      </ReactTooltip>
    </span>
  );
};

Tooltip.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** The content of the Tooltip. */
  children: PropTypes.node.isRequired,
  /** Determines if the tooltip should be triggered by hovering over the label or not. */
  hover: PropTypes.bool,
  /** Shows purple tooltip with white text */
  isDarkTooltip: PropTypes.bool,
  /** Determines the placement of the Tooltip. */
  placement: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  /** Changes the label color scheme to light. */
  lightLabel: PropTypes.bool,
  /** Determines the label (button) variant. */
  labelVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'link',
    'icon',
  ]),
  /** The label text for the button which activates the tooltip. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Used to control the display of the tooltip from another component. */
  tooltipRef: PropTypes.objectOf(PropTypes.object),
};

Tooltip.defaultProps = {
  placement: 'bottom',
  labelVariant: 'link',
  isDarkTooltip: false,
};

export default memo(Tooltip);
