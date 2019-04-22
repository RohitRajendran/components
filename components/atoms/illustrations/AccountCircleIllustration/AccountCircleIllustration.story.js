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
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <AccountCircleIllustration {...defaultProps()} />);
