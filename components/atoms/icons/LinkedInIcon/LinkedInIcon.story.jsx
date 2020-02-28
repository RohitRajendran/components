import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import LinkedInIcon from './LinkedInIcon.tsx';
import LinkedInIconReadme from './LinkedInIcon.mdx';

const stories = storiesOf('Atoms/Icons/LinkedInIcon', module);

stories.addParameters({
  docs: {
    page: LinkedInIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  isFull: boolean('isFull', false),
});

stories.add('default', () => <LinkedInIcon {...defaultProps()} />);
