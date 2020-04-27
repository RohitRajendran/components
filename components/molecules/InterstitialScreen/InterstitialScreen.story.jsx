import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {text, object} from '@storybook/addon-knobs';
import InterstitialScreen from './InterstitialScreen';
import InterstitialScreenReadMe from './InterstitialScreen.mdx';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';
const stories = storiesOf('Molecules/InterstitialScreen', module);

stories.addParameters({
  docs: {
    page: InterstitialScreenReadMe,
  },
});

const defaultProps = (actionBarOptions) => ({
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
  actionBarOptions: object('actionBarOptions', actionBarOptions),
});

stories.add('default', () => <InterstitialScreen {...defaultProps()} />);

stories.add('with bar', () => (
  <InterstitialScreen
    {...defaultProps({
      buttonLabel: 'Switch to a Draft Investment Plan',
      buttonOptions: {
        to: '#',
      },
    })}
  />
));
