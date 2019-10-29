import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GingerBreadCircleIllustration from './GingerBreadCircleIllustration';
import GingerBreadCircleIllustrationReadMe from './GingerBreadCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/GingerBreadCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: GingerBreadCircleIllustrationReadMe,
  },
});

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
