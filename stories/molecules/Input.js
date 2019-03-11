import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {
  DateMask,
  CurrencyMask,
  PercentageWithDecimalMaskAllowNegative,
} from '../../stories/util';
import InputReadme from '../../components/Input/README.md';
import Input from '../../components/Input';
import {State, Store} from '@sambego/storybook-state';

const store = new Store({
  default: '',
  currency: '',
  percent: '',
  date: '',
  error: '',
});

const stories = storiesOf('Molecules/Input', module);

stories.addDecorator(withKnobs).add(
  'default',
  withReadme(InputReadme, () => (
    <div className="row">
      <div className="col-xs-12">
        <State store={store}>
          <Input
            label={text('label', 'Address')}
            append={text('append')}
            prepend={text('prepend')}
            name={text('name', 'default input')}
            description={text('description', 'This is where you live.')}
            type={text('type', 'text')}
            placeholder={text('placeholder', '1660 L Street')}
            value={store.get('default')}
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
          />
        </State>
      </div>
    </div>
  ))
);

stories.addDecorator(withKnobs).add(
  'currency',
  withReadme(InputReadme, () => (
    <div className="row">
      <div className="col-xs-12">
        <State store={store}>
          <Input
            label={text('label', 'Amount')}
            append={text('append')}
            prepend={text('prepend', '$')}
            name={text('name', 'currency input')}
            description={text('description')}
            type={text('type', 'text')}
            placeholder={(text('placeholder'), '0')}
            value={store.get('currency')}
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
          />
        </State>
      </div>
    </div>
  ))
);

stories.addDecorator(withKnobs).add(
  'percent',
  withReadme(InputReadme, () => (
    <div className="row">
      <div className="col-xs-12">
        <State store={store}>
          <Input
            label={text('label', 'Increase')}
            append={text('append', '%')}
            prepend={text('prepend')}
            name={text('name', 'percent input')}
            description={text('description')}
            type={text('type', 'text')}
            placeholder={text('placeholder', '0%')}
            value={store.get('percent')}
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
          />
        </State>
      </div>
    </div>
  ))
);

stories.addDecorator(withKnobs).add(
  'date',
  withReadme(InputReadme, () => (
    <div className="row">
      <div className="col-xs-12">
        <State store={store}>
          <Input
            label={text('label', 'Date')}
            append={text('append')}
            prepend={text('prepend')}
            name={text('name', 'date input')}
            description={text('description')}
            type={text('type', 'text')}
            placeholder={text('placeholder', 'MM/DD/YYYY')}
            value={store.get('date')}
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
          />
        </State>
      </div>
    </div>
  ))
);

stories.addDecorator(withKnobs).add(
  'error',
  withReadme(InputReadme, () => (
    <div className="row">
      <div className="col-xs-12">
        <State store={store}>
          <Input
            label={text('label', 'Address')}
            append={text('append')}
            prepend={text('prepend')}
            name={text('name', 'disabled input')}
            description={text('description')}
            type={text('type')}
            placeholder={text('placeholder', '1660 L Street')}
            value={store.get('error') || '1660 L Street'}
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
          />
        </State>
      </div>
    </div>
  ))
);

stories.addDecorator(withKnobs).add(
  'disabled',
  withReadme(InputReadme, () => (
    <div className="row">
      <div className="col-xs-12">
        <State store={store}>
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
        </State>
      </div>
    </div>
  ))
);
