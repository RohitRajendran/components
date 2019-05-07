import React from 'react';
import {storiesOf} from '@storybook/react';
import ExpandyCircleIcon from './ExpandyCircleIcon';
import {text, select} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ExpandyCircleIconReadme from './ExpandyCircleIcon.md';

const stories = storiesOf('Atoms/Icons/ExpandyCircleIcon', module);

stories.addDecorator(withReadme(ExpandyCircleIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <ExpandyCircleIcon {...defaultProps()} />);
