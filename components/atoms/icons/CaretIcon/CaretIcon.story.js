import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, select} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CaretIcon from './CaretIcon';
import CaretIconReadme from './CaretIcon.md';

const stories = storiesOf('Atoms/Icons/CaretIcon', module);

stories.addDecorator(withReadme(CaretIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  stroke: text('stroke', '1.5'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <CaretIcon {...defaultProps()} />);
