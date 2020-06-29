import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import StarIcon from './StarIcon.tsx';
import StarIconReadme from './StarIcon.mdx';

const stories = storiesOf('Atoms/Icons/StarIcon', module);

stories.addParameters({
  docs: {
    page: StarIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <StarIcon {...defaultProps()} />);
