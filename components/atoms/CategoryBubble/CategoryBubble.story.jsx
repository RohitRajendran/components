import {color as colorKnob, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CategoryBubble from './CategoryBubble.tsx';
import CategoryBubbleReadme from './CategoryBubble.mdx';

const stories = storiesOf('Atoms/CategoryBubble', module);

stories.addParameters({
  docs: {
    page: CategoryBubbleReadme,
  },
});

const defaultProps = (label = 'Blogs', color = '#000') => ({
  label: text('Label', label),
  color: colorKnob('Color', color),
});

stories.add('default', () => {
  const props = defaultProps();

  return <CategoryBubble label={props.label} color={props.color} />;
});
