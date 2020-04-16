import React from 'react';
import {storiesOf} from '@storybook/react';
import InterstitialScreen from './InterstitialScreen';
import InterstitialScreenReadMe from './InterstitialScreen.mdx';

const stories = storiesOf('Molecules/InterstitialScreen', module);

stories.addParameters({
  docs: {
    page: InterstitialScreenReadMe,
  },
});

const defaultProps = () => ({
  // Add props that the component uses with the appropriate storybook knob
  // https://stackoverflow.com/c/unitedincome/questions/136
});

stories.add('default', () => <InterstitialScreen {...defaultProps()} />);

// Add more stories: https://stackoverflow.com/c/unitedincome/questions/140
