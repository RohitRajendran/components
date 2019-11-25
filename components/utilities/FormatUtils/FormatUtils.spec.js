import test from 'tape';
import {
  cleanCurrency,
  formatCurrency,
  formatCurrencyNoDecimal,
  formatEllipsis,
} from './FormatUtils';

test('FormatUtils - cleanCurrency', (t) => {
  t.equals(cleanCurrency('$2,000'), '2000', 'Should format the currency');
  t.equals(cleanCurrency(2000), 2000, 'Should just return value');

  t.end();
});

test('FormatUtils - formatCurrency', (t) => {
  t.equals(formatCurrency('2,000'), '$2,000.00', 'Should format the currency.');
  t.equals(
    formatCurrency('2,000.12'),
    '$2,000.12',
    'Should format the currency.',
  );
  t.equals(formatCurrency(2000), '$2,000.00', 'Should format the currency.');
  t.end();
});

test('FormatUtils - formatCurrencyNoDecimal', (t) => {
  t.equals(
    formatCurrencyNoDecimal('2,000.12'),
    '$2,000',
    'Should format the currency without a decimal place.',
  );
  t.equals(
    formatCurrencyNoDecimal('2000.12'),
    '$2,000',
    'Should format the currency without a decimal place.',
  );
  t.end();
});

test('FormatUtils - formatEllipsis', (t) => {
  const charLimit = 25;

  t.equal(
    formatEllipsis('short title', charLimit),
    'short title',
    'Should return title if it is under limit',
  );
  t.equal(
    formatEllipsis('This is a very, very long string', charLimit).length,
    charLimit,
    'Should truncate string appropirately',
  );
  t.end();
});
