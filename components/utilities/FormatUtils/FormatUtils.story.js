import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {formatCurrency, formatCurrencyNoDecimal} from './FormatUtils';
import FormatUtilsReadMe from './FormatUtils.md';

const stories = storiesOf('Utilities/formatUtils', module);

const FormatCurrency = () => (
  <Fragment>
    <h1>formatCurrency</h1>
    <p>Turns 20000 into {formatCurrency(20000)}</p>
  </Fragment>
);

const FormatCurrencyNoDecimal = () => (
  <Fragment>
    <h1>formatCurrency</h1>
    <p>Turns 20000 into {formatCurrencyNoDecimal(20000)}</p>
  </Fragment>
);

stories.addDecorator(withReadme(FormatUtilsReadMe));

stories.add('formatCurrency', () => <FormatCurrency />);
stories.add('formatCurrencyNoDecimal', () => <FormatCurrencyNoDecimal />);
