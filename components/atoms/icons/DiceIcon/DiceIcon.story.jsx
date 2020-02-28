import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import DiceIcon from './DiceIcon.tsx';
import DiceIconReadme from './DiceIcon.mdx';

const stories = storiesOf('Atoms/Icons/DiceIcon', module);

stories.addParameters({
  docs: {
    page: DiceIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <DiceIcon {...defaultProps()} />);
