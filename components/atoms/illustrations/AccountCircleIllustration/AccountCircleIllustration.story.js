import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import AccountCircleIllustration from './AccountCircleIllustration';
import AccountCircleIllustrationReadMe from './AccountCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/AccountCircleIllustration',
  module
);

stories.addDecorator(withReadme(AccountCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => <AccountCircleIllustration {...defaultProps()} />);
