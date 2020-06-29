import {color, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import InfoIcon from './InfoIcon.tsx';
import InfoIconReadme from './InfoIcon.mdx';

const stories = storiesOf('Atoms/Icons/InfoIcon', module);

stories.addParameters({
  docs: {
    page: InfoIconReadme,
  },
});

const defaultProps = () => ({
  circleFill: color('circleFill', '#000'),
  iconFill: color('iconFill', '#FFF'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <InfoIcon {...defaultProps()} />);
