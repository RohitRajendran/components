import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import TrashIcon from './TrashIcon.tsx';
import TrashIconReadme from './TrashIcon.mdx';

const stories = storiesOf('Atoms/Icons/TrashIcon', module);

stories.addParameters({
  docs: {
    page: TrashIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <TrashIcon {...defaultProps()} />);
