import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import StarCircleIcon from './StarCircleIcon';
import StarCricleIconReadme from './StarCircleIcon.md';

const stories = storiesOf('Atoms/Icons/StarCircleIcon', module);

stories.addDecorator(withReadme(StarCricleIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#FFF'),
  outerFill: text('outerFill', 'Green'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <StarCircleIcon {...defaultProps()} />);
