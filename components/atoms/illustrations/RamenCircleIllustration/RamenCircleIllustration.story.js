import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import RamenCircleIllustration from './RamenCircleIllustration';
import RamenCircleIllustrationReadMe from './RamenCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/RamenCircleIllustration',
  module
);

stories.addDecorator(withReadme(RamenCircleIllustrationReadMe));

const defaultProps = (color, draft) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <RamenCircleIllustration {...defaultProps(false, false)} />
));
stories.add('color', () => (
  <RamenCircleIllustration {...defaultProps(true, false)} />
));
stories.add('draft', () => (
  <RamenCircleIllustration {...defaultProps(false, true)} />
));
