import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ThumbsUpIcon from './ThumbsUpIcon.tsx';
import ThumbsUpIconReadme from './ThumbsUpIcon.mdx';

const stories = storiesOf('Atoms/Icons/ThumbsUpIcon', module);

stories.addParameters({
  docs: {
    page: ThumbsUpIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ThumbsUpIcon {...defaultProps()} />);
