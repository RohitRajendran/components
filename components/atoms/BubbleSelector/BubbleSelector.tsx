import classNames from 'classnames';
import React, {Fragment, FC} from 'react';
import './BubbleSelector.scss';

interface OptionsConfig {
  value: string;
  color?: string;
}

type OptionsType = Array<OptionsConfig>;

type BubbleSelectorProps = {
  /** Collection of option labels and optional colors */
  options: OptionsType;
  /** Currently selected value */
  value: string;
  /** Handler for when the selected value changes */
  onChange: (value: string) => void;
  /** Optional fixed width of each selector */
  fixedWidth?: string;
};

const BubbleSelector: FC<BubbleSelectorProps> = ({
  options,
  value,
  onChange,
  fixedWidth,
}) => (
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
            onClick={(): void => {
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
            data-cy={option.value.toLowerCase()}
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

export default BubbleSelector;
