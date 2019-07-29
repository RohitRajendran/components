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

const defaultProps = (illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <GingerBreadCircleIllustration {...defaultProps(false)} />
));

stories.add('illuminated', () => (
  <GingerBreadCircleIllustration {...defaultProps(true)} />
));
