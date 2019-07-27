import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import GingerBreadCircleIllustration from './GingerBreadCircleIllustration';
import GingerBreadCircleIllustrationReadMe from './GingerBreadCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/GingerBreadCircleIllustration',
  module
);

stories.addDecorator(withReadme(GingerBreadCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <GingerBreadCircleIllustration {...defaultProps(false, false, false)} />
));

stories.add('illuminated', () => (
  <GingerBreadCircleIllustration {...defaultProps(false, false, true)} />
));
