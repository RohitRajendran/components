import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import LockCircleIcon from './LockCircleIcon.tsx';
import LockCircleIconReadme from './LockCircleIcon.mdx';
import {colors} from '../../../../constants/js/colors';

const stories = storiesOf('Atoms/Icons/LockCircleIcon', module);

stories.addParameters({
  docs: {
    page: LockCircleIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', colors.white),
  outerFill: text('outerFill', colors.royal),
  height: text('height', '2.4rem'),
  width: text('width', '2.4rem'),
});

stories.add('default', () => <LockCircleIcon {...defaultProps()} />);
