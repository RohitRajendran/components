import React from 'react';
import {storiesOf} from '@storybook/react';
import ArrowIcon from './ArrowIcon';
import {text, select} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ArrowIconReadme from './ArrowIcon.md';

const stories = storiesOf('Atoms/Icons/ArrowIcon', module);

stories.addDecorator(withReadme(ArrowIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <ArrowIcon {...defaultProps()} />);
