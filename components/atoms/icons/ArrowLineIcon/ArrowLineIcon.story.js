import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import ArrowLineIcon from './ArrowLineIcon';
import ArrowLineIconReadMe from './ArrowLineIcon.md';
import {text, select} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Icons/ArrowLineIcon', module);

stories.addDecorator(withReadme(ArrowLineIconReadMe));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '44.5rem'),
  width: text('width', '1.3rem'),
  direction: select('direction', ['down', 'up', 'right', 'left'], 'down'),
});

stories.add('default', () => <ArrowLineIcon {...defaultProps()} />);
