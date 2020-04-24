import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import InterstitialStepScreen from './InterstitialStepScreen';
import {PureCarCircleIllustration} from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';

test('InterstitialStepScreen - renders', (t) => {
  try {
    const props = {
      Icon: PureCarCircleIllustration,
      title: 'Welcome to Your Draft Plan',
      description: <p>Hello</p>,
      stepOptions: {
        current: 1,
        steps: [
          {
            stepLabel: 'Answer a Series of Questions',
            buttonLabel: 'Answer Questions',
            buttonOptions: {
              to: 'https://unitedincome.com',
            },
          },
          {
            stepLabel: 'Analyze Your Plan Results',
            buttonLabel: 'Analyze',
            buttonOptions: {
              to: 'https://unitedincome.com',
            },
          },
          {
            stepLabel: 'Confirm Your Plan',
            buttonLabel: 'Confirm',
            buttonOptions: {
              to: 'https://unitedincome.com',
            },
          },
        ],
      },
      moreDetails: {
        cabinetContent: <p>Carole Baskin</p>,
        label: 'Joe Exotic',
        header: 'Montezuma',
      },
      actionBarOptions: {
        buttonLabel: 'Switch to a Draft Investment Plan',
        buttonOptions: {
          to: '#',
        },
      },
    };

    const {getByText} = render(<InterstitialStepScreen {...props} />);

    t.true(getByText(props.title));
    t.true(getByText('Hello'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InterstitialStepScreen - renders with a description as a string', (t) => {
  try {
    const props = {
      Icon: PureCarCircleIllustration,
      title: 'Welcome to Your Draft Plan',
      description: 'Hello',
      stepOptions: {
        current: 1,
        steps: [
          {
            stepLabel: 'Answer a Series of Questions',
            buttonLabel: 'Answer Questions',
            buttonOptions: {
              to: 'https://unitedincome.com',
            },
          },
          {
            stepLabel: 'Analyze Your Plan Results',
            buttonLabel: 'Analyze',
            buttonOptions: {
              to: 'https://unitedincome.com',
            },
          },
          {
            stepLabel: 'Confirm Your Plan',
            buttonLabel: 'Confirm',
            buttonOptions: {
              to: 'https://unitedincome.com',
            },
          },
        ],
      },
    };

    const {getByText} = render(<InterstitialStepScreen {...props} />);

    t.true(getByText(props.title));
    t.true(getByText('Hello'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
