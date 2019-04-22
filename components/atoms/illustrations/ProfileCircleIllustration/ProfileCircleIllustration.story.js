import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ProfileCircleIllustration from './ProfileCircleIllustration';
import ProfileCircleIllustrationReadMe from './ProfileCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/ProfileCircleIllustration',
  module
);

stories.addDecorator(withReadme(ProfileCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <ProfileCircleIllustration {...defaultProps()} />);
