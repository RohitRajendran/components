import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import SushiCircleIllustration from './SushiCircleIllustration';
import SushiCircleIllustrationReadMe from './SushiCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/SushiCircleIllustration',
  module
);

stories.addDecorator(withReadme(SushiCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <SushiCircleIllustration {...defaultProps()} />);
