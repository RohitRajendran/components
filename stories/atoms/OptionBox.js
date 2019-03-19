import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import OptionBox from '../../components/OptionBox/OptionBox';
import OptionBoxReadme from '../../components/OptionBox/OptionBox.md';
import {boolean, select} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/OptionBox', module);

stories.addDecorator(withReadme(OptionBoxReadme));

const optionDefaults = (defaultVariant, checked) => ({
  variant: select('Variant', ['check', 'radio'], defaultVariant),
  checked: boolean('checked', checked),
  disabled: boolean('disabled', false),
});

stories.add('check', () => <OptionBox {...optionDefaults('check', true)} />);

stories.add('radio', () => <OptionBox {...optionDefaults('radio', true)} />);
