import test from 'tape';
import {isBeforeMonth, isAfterMonth} from './DateUtils';

test('DateUtils - isBeforeMonth', (t) => {
  t.true(isBeforeMonth('12/1990'));
  t.false(isBeforeMonth('12/4209'));
  t.end();
});

test('DateUtils - isAfterMonth', (t) => {
  t.true(isAfterMonth('02/4209'));
  t.false(isAfterMonth('02/1990'));
  t.end();
});
