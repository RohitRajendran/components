import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import OptionBox from '../../components/OptionBox/OptionBox';
import OptionBoxReadme from '../../components/OptionBox/OptionBox.md';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';

const optionDefaults = (defaultVariant) => ({
  variant: select('Variant', ['check', 'radio'], defaultVariant),
  checked: boolean('checked', true),
  disabled: boolean('disabled', false),
});

const stories = storiesOf('Atoms/OptionBox', module);

stories
  .addDecorator(withKnobs)
  .add(
    'check',
    withReadme(OptionBoxReadme, () => (
      <OptionBox {...optionDefaults('check')} />
    ))
  );

stories
  .addDecorator(withKnobs)
  .add(
    'radio',
    withReadme(OptionBoxReadme, () => (
      <OptionBox {...optionDefaults('radio')} />
    ))
  );
