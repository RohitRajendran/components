import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ExpandyCircleIcon from './ExpandyCircleIcon.tsx';
import ExpandyCircleIconReadme from './ExpandyCircleIcon.mdx';

const stories = storiesOf('Atoms/Icons/ExpandyCircleIcon', module);

stories.addParameters({
  docs: {
    page: ExpandyCircleIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <ExpandyCircleIcon {...defaultProps()} />);
