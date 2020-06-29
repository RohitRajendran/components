import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import StarCircleIcon from './StarCircleIcon.tsx';
import StarCircleIconReadme from './StarCircleIcon.mdx';

const stories = storiesOf('Atoms/Icons/StarCircleIcon', module);

stories.addParameters({
  docs: {
    page: StarCircleIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#FFF'),
  outerFill: text('outerFill', 'Green'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <StarCircleIcon {...defaultProps()} />);
