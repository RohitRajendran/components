import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import HealthCircleIllustration from './HealthCircleIllustration';
import HealthCircleIllustrationReadMe from './HealthCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/HealthCircleIllustration',
  module
);

stories.addDecorator(withReadme(HealthCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <HealthCircleIllustration {...defaultProps()} />);
