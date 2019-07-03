import React from 'react';
import {storiesOf} from '@storybook/react';
import TwitterIcon from './TwitterIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import TwitterIconReadme from './TwitterIcon.md';

const stories = storiesOf('Atoms/Icons/TwitterIcon', module);

stories.addDecorator(withReadme(TwitterIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <TwitterIcon {...defaultProps()} />);
