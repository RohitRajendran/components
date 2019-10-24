import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import {formatCurrency, formatCurrencyNoDecimal} from './FormatUtils';
import FormatUtilsReadMe from './FormatUtils.mdx';

const stories = storiesOf('Utilities/FormatUtils', module);

stories.addParameters({
  docs: {
    page: FormatUtilsReadMe,
  },
});

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

stories.add('formatCurrency', () => <FormatCurrency />);
stories.add('formatCurrencyNoDecimal', () => <FormatCurrencyNoDecimal />);
