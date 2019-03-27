import React from 'react';
import {storiesOf} from '@storybook/react';
import ArrowIcon from './ArrowIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ArrowIconReadme from './ArrowIcon.md';

const stories = storiesOf('Atoms/Icons/ArrowIcon', module);

stories.addDecorator(withReadme(ArrowIconReadme));

stories.add('default', () => (
  <ArrowIcon
    fill={text('fill', '#000')}
    height={text('height', '20')}
    width={text('width', '20')}
    className={text('className')}
  />
));
