import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {text, boolean, number} from '@storybook/addon-knobs';
import {
  DateMask,
  CurrencyMask,
  PercentageWithDecimalMaskAllowNegative,
} from '../util';
import InputReadme from '../../components/Input/Input.md';
import Input from '../../components/Input/Input';
import {State, Store} from '@sambego/storybook-state';

const store = new Store({
  default: '',
  currency: '',
  percent: '',
  date: '',
  error: '',
});

const stories = storiesOf('Atoms/Input', module);

stories.addDecorator(withReadme(InputReadme));

stories.add('default', () => (
  <div className="row">
    <div className="col-xs-12">
      <State store={store}>
        {(state) => [
          <Input
            label={text('label', 'Address')}
            append={text('append')}
            prepend={text('prepend')}
            name={text('name', 'default input')}
            description={text('description', 'This is where you live.')}
            type={text('type', 'text')}
            placeholder={text('placeholder', '1660 L Street')}
            value={state.default}
            required={boolean('required')}
            pattern={text('pattern')}
            maxLength={number('maxLength')}
            min={number('min')}
            max={number('max')}
            step={number('step')}
            validationErrorMsg={text('validationErrorMsg')}
            validateOnBlur={boolean('validateOnBlur')}
            error={boolean('error', false)}
            disabled={boolean('disabled')}
            inputClasses={text('inputClasses')}
            onChange={(event) => store.set({default: event.target.value})}
            key="address"
          />,
        ]}
      </State>
    </div>
  </div>
));

stories.add('currency', () => (
  <div className="row">
    <div className="col-xs-12">
      <State store={store}>
        {(state) => [
          <Input
            label={text('label', 'Amount')}
            append={text('append')}
            prepend={text('prepend', '$')}
            name={text('name', 'currency input')}
            description={text('description')}
            type={text('type', 'text')}
            placeholder={(text('placeholder'), '0')}
            value={state.currency}
            required={boolean('required')}
            pattern={text('pattern')}
            maxLength={number('maxLength')}
            min={number('min')}
            max={number('max')}
            step={number('step')}
            validationErrorMsg={text('validationErrorMsg')}
            validateOnBlur={boolean('validateOnBlur')}
            error={boolean('error', false)}
            disabled={boolean('disabled')}
            inputClasses={text('inputClasses')}
            mask={CurrencyMask}
            onChange={(event) => store.set({currency: event.target.value})}
            key="amount"
          />,
        ]}
      </State>
    </div>
  </div>
));

stories.add('percent', () => (
  <div className="row">
    <div className="col-xs-12">
      <State store={store}>
        {(state) => [
          <Input
            label={text('label', 'Increase')}
            append={text('append', '%')}
            prepend={text('prepend')}
            name={text('name', 'percent input')}
            description={text('description')}
            type={text('type', 'text')}
            placeholder={text('placeholder', '0%')}
            value={state.percent}
            required={boolean('required')}
            pattern={text('pattern')}
            maxLength={number('maxLength')}
            min={number('min')}
            max={number('max')}
            step={number('step')}
            validationErrorMsg={text('validationErrorMsg')}
            validateOnBlur={boolean('validateOnBlur')}
            error={boolean('error', false)}
            disabled={boolean('disabled')}
            inputClasses={text('inputClasses')}
            onChange={(event) => store.set({percent: event.target.value})}
            mask={PercentageWithDecimalMaskAllowNegative}
            key="increase"
          />,
        ]}
      </State>
    </div>
  </div>
));

stories.add('date', () => (
  <div className="row">
    <div className="col-xs-12">
      <State store={store}>
        {(state) => [
          <Input
            label={text('label', 'Date')}
            append={text('append')}
            prepend={text('prepend')}
            name={text('name', 'date input')}
            description={text('description')}
            type={text('type', 'text')}
            placeholder={text('placeholder', 'MM/DD/YYYY')}
            value={state.date}
            required={boolean('required')}
            pattern={text('pattern')}
            maxLength={number('maxLength')}
            min={number('min')}
            max={number('max')}
            step={number('step')}
            validationErrorMsg={text('validationErrorMsg')}
            validateOnBlur={boolean('validateOnBlur')}
            error={boolean('error', false)}
            disabled={boolean('disabled')}
            inputClasses={text('inputClasses')}
            onChange={(event) => store.set({date: event.target.value})}
            mask={DateMask}
            key="date"
          />,
        ]}
      </State>
    </div>
  </div>
));

stories.add('error', () => (
  <div className="row">
    <div className="col-xs-12">
      <State store={store}>
        {(state) => [
          <Input
            label={text('label', 'Address')}
            append={text('append')}
            prepend={text('prepend')}
            name={text('name', 'disabled input')}
            description={text('description')}
            type={text('type')}
            placeholder={text('placeholder', '1660 L Street')}
            value={state.error || '1660 L Street'}
            required={boolean('required')}
            pattern={text('pattern')}
            maxLength={number('maxLength')}
            min={number('min')}
            max={number('max')}
            step={number('step')}
            validationErrorMsg={text('validationErrorMsg', 'Not a valid input')}
            validateOnBlur={boolean('validateOnBlur')}
            error={boolean('error', true)}
            disabled={boolean('disabled', false)}
            inputClasses={text('inputClasses')}
            onChange={(event) => store.set({error: event.target.value})}
            key="address"
          />,
        ]}
      </State>
    </div>
  </div>
));

stories.add('disabled', () => (
  <div className="row">
    <div className="col-xs-12">
      <Input
        label={text('label', 'Address')}
        append={text('append')}
        prepend={text('prepend')}
        name={text('name', 'disabled input')}
        description={text('description')}
        type={text('type')}
        placeholder={text('placeholder', '0%')}
        value="1660 L Street"
        required={boolean('required')}
        pattern={text('pattern')}
        maxLength={number('maxLength')}
        min={number('min')}
        max={number('max')}
        step={number('step')}
        validationErrorMsg={text('validationErrorMsg')}
        validateOnBlur={boolean('validateOnBlur')}
        error={boolean('error', false)}
        disabled={boolean('disabled', true)}
        inputClasses={text('inputClasses')}
      />
    </div>
  </div>
));
