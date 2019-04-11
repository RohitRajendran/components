import React from 'react';
import {storiesOf} from '@storybook/react';
import ExpandyCircleIcon from './ExpandyCircleIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ExpandyCircleIconReadme from './ExpandyCircleIcon.md';

const stories = storiesOf('Atoms/Icons/ExpandyCircleIcon', module);

stories.addDecorator(withReadme(ExpandyCircleIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <ExpandyCircleIcon {...defaultProps()} />);
