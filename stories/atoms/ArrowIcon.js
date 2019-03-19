import React from 'react';
import {storiesOf} from '@storybook/react';
import Arrow from '../../components/ArrowIcon/ArrowIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ArrowIconReadme from '../../components/ArrowIcon/ArrowIcon.md';

const stories = storiesOf('Atoms/ArrowIcon', module);

stories.addDecorator(withReadme(ArrowIconReadme));

stories.add('default', () => (
  <Arrow
    fill={text('fill', '#000')}
    height={text('height', '20')}
    width={text('width', '20')}
    className={text('className')}
  />
));
