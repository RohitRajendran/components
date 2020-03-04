import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CheckIcon from './CheckIcon.tsx';
import CheckIconReadMe from './CheckIcon.mdx';

const stories = storiesOf('Atoms/Icons/CheckIcon', module);

stories.addParameters({
  docs: {
    page: CheckIconReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#008422'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <CheckIcon {...defaultProps()} />);
