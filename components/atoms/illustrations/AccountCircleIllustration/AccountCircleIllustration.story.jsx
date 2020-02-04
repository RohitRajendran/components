import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import AccountCircleIllustration from './AccountCircleIllustration';
import AccountCircleIllustrationReadMe from './AccountCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/AccountCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: AccountCircleIllustrationReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => <AccountCircleIllustration {...defaultProps()} />);
