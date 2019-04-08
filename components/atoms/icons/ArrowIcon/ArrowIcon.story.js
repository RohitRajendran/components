import React from 'react';
import {storiesOf} from '@storybook/react';
import ArrowIcon from './ArrowIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ArrowIconReadme from './ArrowIcon.md';

const stories = storiesOf('Atoms/Icons/ArrowIcon', module);

stories.addDecorator(withReadme(ArrowIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <ArrowIcon {...defaultProps()} />);
