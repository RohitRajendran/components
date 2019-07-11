import React from 'react';
import {storiesOf} from '@storybook/react';
import ThumbsUpIcon from './ThumbsUpIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ThumbsUpIconReadme from './ThumbsUpIcon.md';

const stories = storiesOf('Atoms/Icons/ThumbsUpIcon', module);

stories.addDecorator(withReadme(ThumbsUpIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ThumbsUpIcon {...defaultProps()} />);
