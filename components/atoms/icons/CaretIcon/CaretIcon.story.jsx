import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CaretIcon from './CaretIcon.tsx';
import CaretIconReadme from './CaretIcon.mdx';

const stories = storiesOf('Atoms/Icons/CaretIcon', module);

stories.addParameters({
  docs: {
    page: CaretIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  stroke: text('stroke', '1.5'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <CaretIcon {...defaultProps()} />);
