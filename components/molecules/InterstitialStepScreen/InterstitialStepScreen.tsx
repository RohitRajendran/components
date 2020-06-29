/** @module InterstitialStepScreen */
import classNames from 'classnames';
import React, {FC} from 'react';
import InterstitialScreen, {
  InterstitialScreenProps,
} from '../InterstitialScreen/InterstitialScreen';
import StepBox, {StepBoxProps} from '../StepBox/StepBox';
import Cabinet from '../Cabinet/Cabinet';
import './InterstitialStepScreen.scss';

type InterstitialStepScreenProps = InterstitialScreenProps & {
  /** The props for the StepBox component. */
  stepOptions: StepBoxProps;
  /** The props for the Cabinet component. */
  moreDetails?: {
    /** The cabinet label. */
    label: string;
    /** The cabinet header. */
    header: string;
    /** The cabinet content. */
    cabinetContent: React.ReactNode;
  };
};

/** Renders a full page interstitial screen with a step component. */
const InterstitialStepScreen: FC<InterstitialStepScreenProps> = ({
  stepOptions,
  moreDetails,
  className,
  ...props
}) => {
  const containerClasses = classNames(
    {
      'uic--interstitial-step-screen': true,
    },
    className,
  );

  return (
    <InterstitialScreen className={containerClasses} {...props}>
      <StepBox {...stepOptions} />
      {moreDetails && (
        <Cabinet
          labelOnDark
          handleWithState
          labelClassName="uic--interstitial-step-screen__cabinet"
          label={moreDetails.label}
          header={moreDetails.header}
        >
          {moreDetails.cabinetContent}
        </Cabinet>
      )}
    </InterstitialScreen>
  );
};

export default InterstitialStepScreen;
