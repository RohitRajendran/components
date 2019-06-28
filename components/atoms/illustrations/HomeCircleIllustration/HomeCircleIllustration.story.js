import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import HomeCircleIllustration from './HomeCircleIllustration';
import HomeCircleIllustrationReadMe from './HomeCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/HomeCircleIllustration', module);

stories.addDecorator(withReadme(HomeCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <HomeCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <HomeCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <HomeCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <HomeCircleIllustration {...defaultProps(false, false, true)} />
));
