/** @module StepBox */
import classNames from 'classnames';
import React, {FC} from 'react';
import './StepBox.scss';
import Button, {ButtonProps} from '../../atoms/Button/Button';
import {isNullOrUndefined} from 'util';
import CheckIcon from '../../atoms/icons/CheckIcon/CheckIcon';

export type StepProps = {
  /** The step label. */
  stepLabel: string;
  /** Determines if the check icon should be excluded from the step or not. */
  excludeCheck?: boolean;
  /** The button options/props. */
  buttonOptions?: ButtonProps;
  /** The button label. */
  buttonLabel?: string;
};

export type StepBoxProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** The current step. */
  current: number;
  /** The step object. */
  steps: StepProps[];
};

/** Renders a step box that can be used in conjunction with the interstitial screen. */
const StepBox: FC<StepBoxProps> = ({className, style, steps, current}) => {
  const containerClasses = classNames(
    {
      'uic--step-box': true,
      'uic--row': true,
      'uic--flex-column': true,
      'uic--position-relative': true,
    },
    className,
  );

  const currentStep = steps[current];

  return (
    <div className={containerClasses} style={style}>
      <div className="uic--step-box__inner uic--d-flex uic--align-items-center uic--justify-content-center">
        <ol className="uic--body-text uic--w-100 uic--text-center">
          {steps.map((item, index) => (
            <li
              className="uic--d-flex uic--align-items-center uic--justify-content-center"
              key={index}
              style={{
                opacity:
                  !isNullOrUndefined(current) && current >= index ? 1 : 0.5,
              }}
            >
              <span>{item.stepLabel}</span>

              {!isNullOrUndefined(current) &&
                current > index &&
                !item.excludeCheck && (
                  <CheckIcon
                    className="uic--step-box__inner--check"
                    width="1.4em"
                    height="1.1rem"
                    removeBackground
                  />
                )}
            </li>
          ))}
        </ol>
      </div>
      {currentStep && currentStep.buttonOptions && currentStep.buttonLabel && (
        <div className="uic--step-box__inner--button uic--position-absolute">
          <Button {...currentStep.buttonOptions} variant="secondary" dark>
            {currentStep.buttonLabel && currentStep.buttonLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default StepBox;
