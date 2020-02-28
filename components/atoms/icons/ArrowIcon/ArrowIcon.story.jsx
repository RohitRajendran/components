import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ArrowIcon from './ArrowIcon.tsx';
import ArrowIconReadme from './ArrowIcon.mdx';

const stories = storiesOf('Atoms/Icons/ArrowIcon', module);

stories.addParameters({
  docs: {
    page: ArrowIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <ArrowIcon {...defaultProps()} />);
