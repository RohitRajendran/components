import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import classNames from 'classnames';

import './BubbleSelector.scss';

const BubbleSelector = ({options, value, onChange, fixedWidth}) => (
  <Fragment>
    {options &&
      options.length > 0 &&
      options.map((option) => {
        const className = classNames({
          'uic--bubble-selector__item': true,
          'uic--bubble-selector__item--selected': value === option.value,
          'uic--bubble-selector__item--fixed-width': fixedWidth,
        });

        return (
          <button
            key={option.value}
            type="button"
            className={className}
            onClick={() => {
              onChange(option.value);
            }}
            style={{
              ...(value !== option.value || !option.color
                ? {}
                : {
                    backgroundColor: option.color,
                    borderColor: option.color,
                  }),
              maxWidth: fixedWidth,
            }}
          >
            {option.value}
            <div
              className="uic--bubble-selector__selected-indicator"
              style={
                value !== option.value || !option.color
                  ? {}
                  : {
                      borderTopColor: option.color,
                    }
              }
            />
          </button>
        );
      })}
  </Fragment>
);

BubbleSelector.propTypes = {
  /** Collection of option labels and optional colors */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Option value */
      value: PropTypes.string.isRequired,
      /** Optional custom option color */
      color: PropTypes.string,
    })
  ).isRequired,
  /** Currently selected value */
  value: PropTypes.string.isRequired,
  /** Handler for when the selected value changes */
  onChange: PropTypes.func.isRequired,
  /** Optional fixed width of each selector */
  fixedWidth: PropTypes.string,
};

export default BubbleSelector;
