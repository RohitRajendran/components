import {number, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import HouseIcon from './HouseIcon.tsx';
import HouseIconReadme from './HouseIcon.mdx';

const stories = storiesOf('Atoms/Icons/HouseIcon', module);

stories.addParameters({
  docs: {
    page: HouseIconReadme,
  },
});

const defaultProps = () => ({
  height: text('height', '2rem'),
  width: text('width', '2rem'),
  houses: number('houses', 10),
  highlight: number('highlight', 5),
  isIE: boolean('isIE', false),
});

stories.add('default', () => <HouseIcon {...defaultProps()} />);
