import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ProfileCircleIllustration from './ProfileCircleIllustration';
import ProfileCircleIllustrationReadMe from './ProfileCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/ProfileCircleIllustration',
  module
);

stories.addParameters({
  docs: {
    page: ProfileCircleIllustrationReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => <ProfileCircleIllustration {...defaultProps()} />);
