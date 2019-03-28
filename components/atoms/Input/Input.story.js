import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {text, boolean, number, select} from '@storybook/addon-knobs';
import InputReadme from './Input.md';
import Input from './Input';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Atoms/Input', module);

const store = new Store({
  default: '',
  currency: '',
  percent: '',
  date: '',
  errorVal: '1660 L Street',
});

stories
  .addDecorator(withReadme(InputReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

export const inputMask = (defaultMask) =>
  select(
    'mask',
    [
      'PhoneNumber',
      'SsnNumber',
      'Date',
      'Month',
      'Zip',
      'Ticker',
      'CommaSeparated',
      'Currency',
      'CurrencyAllowNegative',
      'Number',
      'PercentageWithDecimal',
      'SmallPercentageWithDecimal',
    ],
    defaultMask
  );

const defaultProps = ({
  label,
  formName,
  description,
  append,
  prepend,
  placeholder,
  error,
  disabled,
  mask,
  validationErrorMsg,
  validateOnBlur,
}) => ({
  name: formName,
  label: text('label', label),
  append: text('append', append),
  prepend: text('prepend', prepend),
  description: text('description', description),
  placeholder: text('placeholder', placeholder),
  value: store.get(formName),
  required: boolean('required'),
  maxLength: number('maxLength'),
  mask: inputMask(mask),
  min: number('min'),
  max: number('max'),
  step: number('step'),
  validationErrorMsg: text('validationErrorMsg', validationErrorMsg),
  validateOnBlur: boolean('validateOnBlur', validateOnBlur),
  disabled: boolean('disabled', disabled),
  error: boolean('error', error),
  onChange: (name, value) => store.set({[name]: value}),
  type: text('type', 'text'),
  key: formName,
});

stories.add('default', () => (
  <div className="row">
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'default',
          label: 'Address',
          description: 'This is where you live.',
          placeholder: '1660 L Street',
        })}
      />
    </div>
  </div>
));

stories.add('currency', () => (
  <div className="row">
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'currency',
          label: 'Amount',
          placeholder: '0',
          mask: 'Currency',
          prepend: '$',
          error: false,
        })}
      />
    </div>
  </div>
));

stories.add('percent', () => (
  <Input
    {...defaultProps({
      formName: 'percent',
      label: 'Increase',
      placeholder: '0%',
      append: '%',
      mask: 'PercentageWithDecimal',
    })}
  />
));

stories.add('date', () => (
  <Input
    {...defaultProps({
      formName: 'date',
      label: 'Date',
      placeholder: 'MM/DD/YYYY',
      mask: 'Date',
      validationErrorMsg: 'Not a valid date range',
      validateOnBlur: true,
    })}
    isValid={() => store.get('date').length === 10}
  />
));

stories.add('error', () => (
  <Input
    {...defaultProps({
      formName: 'errorVal',
      label: 'Address',
      placeholder: '1660 L Street',
      validationErrorMsg: 'Not a valid input!',
      error: true,
      mask: null,
    })}
  />
));

stories.add('disabled', () => (
  <Input
    {...defaultProps({
      formName: 'disabled',
      label: 'Address',
      description: 'This is where you live.',
      placeholder: '1660 L Street',
      disabled: true,
      mask: null,
    })}
    value="1660 L Street"
  />
));
