import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, number, select, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import Input from './Input';
import InputReadme from './Input.mdx';

const stories = storiesOf('Atoms/Input', module);

stories.addParameters({
  docs: {
    page: InputReadme,
  },
});

const store = new Store({
  default: '',
  currency: '',
  percent: '',
  date: '',
  errorVal: '1660 L Street',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

export const inputMask = (defaultMask) =>
  select(
    'mask',
    [
      'ApexAccount',
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
      'PercentageWithDecimalAllowNegative',
    ],
    defaultMask,
  );

const defaultProps = ({
  label,
  formName,
  description,
  append,
  prepend,
  placeholder,
  explanation,
  error,
  disabled,
  mask,
  validationErrorMsg,
  validateOnBlur,
  showRequiredError,
}) => ({
  name: formName,
  label: text('label', label),
  append: text('append', append),
  prepend: text('prepend', prepend),
  description: text('description', description),
  placeholder: text('placeholder', placeholder),
  explanation: text('explanation', explanation),
  value: store.get(formName),
  required: boolean('required', true),
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
  sanitize: boolean('sanitize'),
  showRequiredError: boolean('showRequiredError', showRequiredError),
  type: text('type', 'text'),
  key: formName,
});

const storyStyles = {
  height: '100%',
  maxWidth: '100%',
  width: '80rem',
  paddingTop: '3rem',
};

stories.add('default', () => (
  <div className="row" style={storyStyles}>
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

stories.add('default with explanation', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'default',
          label: 'Address',
          description: 'This is where you live.',
          placeholder: '1660 L Street',
          explanation: 'Montezuma is a ginger cat.',
        })}
      />
    </div>
  </div>
));

stories.add('currency', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'currency',
          label: 'Amount',
          placeholder: '0',
          mask: 'Currency',
          error: false,
        })}
      />
    </div>
  </div>
));

stories.add('percent', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'percent',
          label: 'Increase',
          placeholder: '0',
          mask: 'PercentageWithDecimal',
        })}
      />
    </div>
  </div>
));

stories.add('date', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'date',
          label: 'Date',
          mask: 'Date',
          validateOnBlur: true,
        })}
      />
    </div>
  </div>
));

stories.add('error', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
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
    </div>
  </div>
));

stories.add('required error', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'default',
          label: 'Address',
          placeholder: '1660 L Street',
          validationErrorMsg: 'Not a valid input!',
          mask: null,
          showRequiredError: true,
        })}
      />
    </div>
  </div>
));

stories.add('disabled', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
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
    </div>
  </div>
));

stories.add('disabled', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'disabled',
          label: 'Address',
          description: 'This is where you live.',
          placeholder: 'Enter your address...',
          disabled: true,
          mask: null,
        })}
      />
    </div>
  </div>
));

stories.add('disabled with value', () => (
  <div className="row" style={storyStyles}>
    <div className="col-xs-12">
      <Input
        {...defaultProps({
          formName: 'disabled',
          label: 'Address',
          description: 'This is where you live.',
          placeholder: 'Enter your address...',
          disabled: true,
          mask: null,
        })}
        value="1660 L Street"
      />
    </div>
  </div>
));
