import test from 'tape';
import {exclusive} from '.';

test('Custom PropTypes - Exclusive - should flag problems', (t) => {
  t.plan(1);

  const exclusives = ['one', 'three'];
  const props = {
    one: true,
    two: true,
    three: true,
  };
  const propName = 'one';
  const componentName = 'AwesomeComponent';

  const propTypeFn = exclusive(exclusives);

  const error = propTypeFn(props, propName, componentName);

  t.deepEqual(
    error,
    new Error(
      'Invalid prop one supplied to AwesomeComponent. Other exclusive props already defined: three'
    ),
    'should throw error for exlcusive props'
  );
});

test('Custom PropTypes - Exclusive - should pass good case', (t) => {
  t.plan(1);

  const exclusives = ['one'];
  const props = {
    one: true,
    two: true,
    three: true,
  };
  const propName = 'one';
  const componentName = 'AwesomeComponent';

  const propTypeFn = exclusive(exclusives);

  const notAnError = propTypeFn(props, propName, componentName);

  t.true(typeof notAnError === 'undefined', 'no error present');
});
