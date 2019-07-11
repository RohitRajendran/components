import React from 'react';
import {storiesOf} from '@storybook/react';
import ThumbsDownIcon from './ThumbsDownIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ThumbsDownIconReadme from './ThumbsDownIcon.md';

const stories = storiesOf('Atoms/Icons/ThumbsDownIcon', module);

stories.addDecorator(withReadme(ThumbsDownIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ThumbsDownIcon {...defaultProps()} />);
