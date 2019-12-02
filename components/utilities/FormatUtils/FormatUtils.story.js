import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import {
  formatCurrency,
  formatCurrencyNoDecimal,
  formatEllipsis,
} from './FormatUtils';
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

const FormatEllipsis = () => (
  <Fragment>
    <h1>formatEllipsis</h1>
    <p>With a 25 character limit, we can easily turn</p>
    <p>
      &#39;This is a very, very long string&#39; into &#39;
      {formatEllipsis('This is a very, very long string', 25)}&#39;
    </p>
  </Fragment>
);

stories.add('formatCurrency', () => <FormatCurrency />);
stories.add('formatCurrencyNoDecimal', () => <FormatCurrencyNoDecimal />);
stories.add('formatEllipsis', () => <FormatEllipsis />);
