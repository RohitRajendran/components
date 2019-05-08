import test from 'tape';
import {formatCurrency, formatCurrencyNoDecimal} from './FormatUtils';

test('FormatUtils - formatCurrency', (t) => {
  t.equals(formatCurrency(2000), '$2,000.00', 'Should format the currency.');
  t.end();
});

test('FormatUtils - formatCurrencyNoDecimal', (t) => {
  t.equals(
    formatCurrencyNoDecimal(2000),
    '$2,000',
    'Should format the currency without a decimal place.'
  );
  t.end();
});
