import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import HealthCircleIllustration from './HealthCircleIllustration';
import HealthCircleIllustrationReadMe from './HealthCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/HealthCircleIllustration',
  module
);

stories.addDecorator(withReadme(HealthCircleIllustrationReadMe));

const defaultProps = (color, draft) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <HealthCircleIllustration {...defaultProps(false, false)} />
));
stories.add('color', () => (
  <HealthCircleIllustration {...defaultProps(true, false)} />
));
stories.add('draft', () => (
  <HealthCircleIllustration {...defaultProps(false, true)} />
));
