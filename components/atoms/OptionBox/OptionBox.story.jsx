import React from 'react';
import {storiesOf} from '@storybook/react';
import OptionBox from './OptionBox';
import OptionBoxReadme from './OptionBox.mdx';
import {boolean, select} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/OptionBox', module);

stories.addParameters({
  docs: {
    page: OptionBoxReadme,
  },
});

const defaultProps = (defaultVariant, checked) => ({
  variant: select('variant', ['check', 'radio'], defaultVariant),
  checked: boolean('checked', checked),
  disabled: boolean('disabled', false),
});

stories.add('check', () => <OptionBox {...defaultProps('check', true)} />, {
  'in-dsm': {id: '5df7b5063d4d18e218b4cf38'},
});

stories.add('radio', () => <OptionBox {...defaultProps('radio', true)} />, {
  'in-dsm': {
    id: '5df7b50d22502a9caa860487',
  },
});
