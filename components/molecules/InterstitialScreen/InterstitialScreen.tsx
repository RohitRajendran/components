/** @module InterstitialScreen */
import classNames from 'classnames';
import React, {FC} from 'react';
import './InterstitialScreen.scss';
import Button from '~components/atoms/Button/Button';

// TODO: Remove
import CarCircle from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';

const steps = [
  {
    label: 'Answer a Series of Questions',
    path: '#',
  },
  {
    label: 'Analyze Your Plan Results',
    path: '##',
  },
  {
    label: 'Confirm Your Plan',
    path: '###',
  },
];

const currentStep = 1;

type InterstitialScreenProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
};

const InterstitialScreen: FC<InterstitialScreenProps> = ({
  className,
  style,
}) => {
  // TODO: Move this to a prop;
  const current = 1;

  const containerClasses = classNames(
    {
      'uic--interstitial-screen': true,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <div className="uic--interstitial-screen__inner uic--d-flex uic--flex-column uic--justify-content-center uic--align-items-center">
        <div className="uic--row uic--text-center">
          <div className="uic--interstitial-screen__inner-icon">
            <CarCircle />
          </div>

          <h1 className="uic--interstitial-screen__inner-title uic--header-1-5-text uic--w-100">
            Welcome to Your Draft Plan
          </h1>
          <span className="uic--interstitial-screen__inner-body uic--body-text">
            <p>
              Let’s get to know one another. By giving us more information about
              your life, finances, and spending needs, we can provide you with
              in depth financial advice tailored specifically to you. Completing
              your financial plan also gives you access to our full suite of
              investment and performance projections.
            </p>
            <p>
              This can take about 45 minutes but we’ll guide you through the
              process every step of the way. Don’t worry if you don’t have all
              the answers right now. You can come back and make changes at any
              time.
            </p>
          </span>
        </div>

        <div className="uic--interstitial-screen__inner-step-box uic--row">
          <div className="uic--interstitial-screen__inner-step-box__inner uic--d-flex uic--align-items-center uic--justify-content-center">
            <ol className="uic--body-text uic--w-100 uic--text-center">
              {steps.map((item, index) => (
                <li
                  key={index}
                  className={
                    current >= index
                      ? 'uic--interstitial-screen__inner-step-box--highlighted'
                      : ''
                  }
                >
                  {item.label}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Button variant="secondary" dark>
          Cick Me
        </Button>
      </div>
    </div>
  );
};

InterstitialScreen.defaultProps = {
  className: 'uic--default-placeholder',
};

export default InterstitialScreen;
