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
  variant: select('Variant', ['check', 'radio'], defaultVariant),
  checked: boolean('checked', checked),
  disabled: boolean('disabled', false),
});

stories.add('check', () => <OptionBox {...defaultProps('check', true)} />);

stories.add('radio', () => <OptionBox {...defaultProps('radio', true)} />);
