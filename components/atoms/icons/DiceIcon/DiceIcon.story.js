import React from 'react';
import {storiesOf} from '@storybook/react';
import DiceIcon from './DiceIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import DiceIconReadme from './DiceIcon.md';

const stories = storiesOf('Atoms/Icons/DiceIcon', module);

stories.addDecorator(withReadme(DiceIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <DiceIcon {...defaultProps()} />);
