import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {text, color as colorKnob} from '@storybook/addon-knobs';
import CategoryBubbleReadme from './CategoryBubble.md';
import CategoryBubble from './CategoryBubble';

const stories = storiesOf('Atoms/CategoryBubble', module);

stories.addDecorator(withReadme(CategoryBubbleReadme));

const defaultProps = (label = 'Blogs', color = '#000') => ({
  label: text('Label', label),
  color: colorKnob('Color', color),
});

stories.add('default', () => {
  const props = defaultProps();

  return <CategoryBubble label={props.label} color={props.color} />;
});
