import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ThumbsDownIcon from './ThumbsDownIcon.tsx';
import ThumbsDownIconReadme from './ThumbsDownIcon.mdx';

const stories = storiesOf('Atoms/Icons/ThumbsDownIcon', module);

stories.addParameters({
  docs: {
    page: ThumbsDownIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ThumbsDownIcon {...defaultProps()} />);
