import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {number, text, object} from '@storybook/addon-knobs';
import InterstitialScreen from './InterstitialScreen';
import InterstitialScreenReadMe from './InterstitialScreen.mdx';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';
import Input from '~components/atoms/Input/Input';
import StepBox from '~components/molecules/StepBox/StepBox';

const stories = storiesOf('Molecules/InterstitialScreen', module);

stories.addParameters({
  docs: {
    page: InterstitialScreenReadMe,
  },
});

const stagingStyles = {
  minHeight: '100vh',
  paddingTop: '2rem',
};

const defaultProps = (steps) => ({
  title: text('title', 'Welcome to Your Draft Plan'),
  Icon: CarCircleIllustration,
  current: number('current', 1),
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
  steps: object('steps', steps),
});

stories.add('default', () => <InterstitialScreen {...defaultProps()} />);

stories.add('steps', () => (
  <InterstitialScreen style={stagingStyles} {...defaultProps()}>
    <StepBox
      current={1}
      steps={[
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
      ]}
    />
  </InterstitialScreen>
));

stories.add('with children', () => (
  <InterstitialScreen style={stagingStyles} {...defaultProps()}>
    <p className="uic--body-text">
      You are able to enter children here to customize this screen.
    </p>
    <Input className="uic--w-100" label="Random Input" value="Montezuma" />
  </InterstitialScreen>
));
