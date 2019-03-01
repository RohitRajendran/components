import React from 'react';
import {storiesOf} from '@storybook/react';
import Spinner from '../../components/Spinner';
import {withKnobs, text} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Spinner', module);

stories
  .addDecorator(withKnobs)
  .add('default', () => (
    <Spinner
      fill={text('fill', '#000')}
      height={text('height', '20px')}
      width={text('width', '20px')}
      className={text('style')}
    />
  ));
