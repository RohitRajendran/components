import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ArrowEllipsisIcon from './ArrowEllipsisIcon.tsx';
import ArrowEllipsisIconReadme from './ArrowEllipsisIcon.mdx';

const stories = storiesOf('Atoms/Icons/ArrowEllipsisIcon', module);

stories.addParameters({
  docs: {
    page: ArrowEllipsisIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ArrowEllipsisIcon {...defaultProps()} />);
