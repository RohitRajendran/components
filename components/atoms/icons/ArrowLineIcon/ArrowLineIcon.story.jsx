import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ArrowLineIcon from './ArrowLineIcon.tsx';
import ArrowLineIconReadMe from './ArrowLineIcon.mdx';

const stories = storiesOf('Atoms/Icons/ArrowLineIcon', module);

stories.addParameters({
  docs: {
    page: ArrowLineIconReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '44.5rem'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <ArrowLineIcon {...defaultProps()} />);
