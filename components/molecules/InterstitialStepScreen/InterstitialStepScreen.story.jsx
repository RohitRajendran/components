import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {number, text, object} from '@storybook/addon-knobs';
import InterstitialStepScreen from './InterstitialStepScreen';
import InterstitialStepScreenReadMe from './InterstitialStepScreen.mdx';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';

const stories = storiesOf('Molecules/InterstitialStepScreen', module);

stories.addParameters({
  docs: {
    page: InterstitialStepScreenReadMe,
  },
});

const defaultProps = (steps, cabinet, actionBarOptions) => ({
  title: text('title', 'Welcome to Your Draft Plan'),
  Icon: CarCircleIllustration,
  description: (
    <Fragment>
      <p>
        Let’s get to know one another. By giving us more information about your
        life, finances, and spending needs, we can provide you with in depth
        financial advice tailored specifically to you. Completing your financial
        plan also gives you access to our full suite of investment and
        performance projections.
      </p>
      <p>
        This can take about 45 minutes but we’ll guide you through the process
        every step of the way. Don’t worry if you don’t have all the answers
        right now. You can come back and make changes at any time.
      </p>
    </Fragment>
  ),
  stepOptions: {
    current: number('current', 1),
    steps: object('steps', steps),
  },
  moreDetails: object('moreDetails', cabinet),
  actionBarOptions: object('actionBarOptions', actionBarOptions),
});

stories.add('default', () => (
  <InterstitialStepScreen
    {...defaultProps([
      {
        stepLabel: '1. Answer a Series of Questions',
        buttonLabel: 'Answer Questions',
        buttonOptions: {
          to: 'https://unitedincome.com',
        },
      },
      {
        stepLabel: '2. Analyze Your Plan Results',
        buttonLabel: 'Analyze',
        buttonOptions: {
          to: 'https://unitedincome.com',
        },
      },
      {
        stepLabel: '3. Confirm Your Plan',
        buttonLabel: 'Confirm',
        buttonOptions: {
          to: 'https://unitedincome.com',
        },
      },
    ])}
  />
));

stories.add('with cabinet', () => (
  <InterstitialStepScreen
    {...defaultProps(
      [
        {
          stepLabel: '1. Answer a Series of Questions',
          buttonLabel: 'Answer Questions',
          buttonOptions: {
            to: 'https://unitedincome.com',
          },
        },
        {
          stepLabel: '2. Analyze Your Plan Results',
          buttonLabel: 'Analyze',
          buttonOptions: {
            to: 'https://unitedincome.com',
          },
        },
        {
          stepLabel: '3. Confirm Your Plan',
          buttonLabel: 'Confirm',
          buttonOptions: {
            to: 'https://unitedincome.com',
          },
        },
      ],
      {
        label: `What You Will Need to Build a Plan`,
        header: `What You Will Need to Build a Plan`,
        cabinetContent: <p>Montezuma is a genius.</p>,
      },
    )}
  />
));

stories.add('with bar', () => (
  <InterstitialStepScreen
    {...defaultProps(
      [
        {
          stepLabel: '1. Answer a Series of Questions',
          buttonLabel: 'Answer Questions',
          buttonOptions: {
            to: 'https://unitedincome.com',
          },
        },
        {
          stepLabel: '2. Analyze Your Plan Results',
          buttonLabel: 'Analyze',
          buttonOptions: {
            to: 'https://unitedincome.com',
          },
        },
        {
          stepLabel: '3. Confirm Your Plan',
          buttonLabel: 'Confirm',
          buttonOptions: {
            to: 'https://unitedincome.com',
          },
        },
      ],
      {
        label: `What You Will Need to Build a Plan`,
        header: `What You Will Need to Build a Plan`,
        cabinetContent: <p>Montezuma is a genius.</p>,
      },
      {
        buttonLabel: 'Switch to a Draft Investment Plan',
        buttonOptions: {
          to: '#',
        },
      },
    )}
  />
));
