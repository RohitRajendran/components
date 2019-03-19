import React from 'react';
import {storiesOf} from '@storybook/react';
import {PureSpinner as Spinner} from '../../components/Spinner/Spinner';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import SpinnerReadme from '../../components/Spinner/Spinner.md';

const stories = storiesOf('Atoms/Spinner', module);

stories.addDecorator(withReadme(SpinnerReadme));

stories.add('default', () => (
  <Spinner
    fill={text('fill', '#000')}
    height={text('height', '20px')}
    width={text('width', '20px')}
    className={text('style')}
  />
));
