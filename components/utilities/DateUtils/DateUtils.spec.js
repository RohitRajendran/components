import moment from 'moment';
import test from 'tape';
import {isAfterMonth, isBeforeMonth, isSameOrBeforeMonth} from './DateUtils';

test('DateUtils - isBeforeMonth', (t) => {
  t.true(isBeforeMonth('12/1990'));
  t.false(isBeforeMonth('12/4209'));
  t.end();
});

test('DateUtils - isSameOrBeforeMonth', (t) => {
  t.true(isSameOrBeforeMonth(moment().format('MM/YYYY')));
  t.false(isSameOrBeforeMonth('02/4209'));
  t.end();
});

test('DateUtils - isAfterMonth', (t) => {
  t.true(isAfterMonth('02/4209'));
  t.false(isAfterMonth('02/1990'));
  t.end();
});
