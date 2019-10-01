import test from 'tape';
import {commaSeparatedMask, tickerMask, maskEnum} from './Input.masks';

test('Input - tickerMask', (t) => {
  t.deepEquals(
    tickerMask.mask('hello'),
    [/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/],
    'Mask should return the correct pattern.'
  );
  t.end();
});

test('Input - commaSeparatedMask', (t) => {
  t.deepEquals(
    commaSeparatedMask.mask('hello'),
    [
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
    ],
    'Mask should return the correct pattern.'
  );
  t.end();
});

test('Input - Date Mask isValid', (t) => {
  t.true(maskEnum['Date'].isValid(), 'Is valid');
  t.true(maskEnum['Date'].isValid('10/12/2019'), 'Is valid');
  t.false(maskEnum['Date'].isValid('10/2019'), 'Is not valid');

  t.end();
});

test('Input - Month Mask isValid', (t) => {
  t.true(maskEnum['Month'].isValid(), 'Is valid');
  t.true(maskEnum['Month'].isValid('10/2019'), 'Is valid');
  t.false(maskEnum['Month'].isValid('10/12/2019'), 'Is not valid');

  t.end();
});
