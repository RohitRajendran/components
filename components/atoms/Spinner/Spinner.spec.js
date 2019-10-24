import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import {PureSpinner} from './Spinner';

test('Spinner - renders the IE version', (t) => {
  const component = shallow(<PureSpinner fill="white" isIe={true} />);

  t.equals(
    component.find('.spinner-ie').length,
    1,
    'Should load the IE variant of the spinner.'
  );

  t.end();
});

test('Spinner - renders the non-IE version', (t) => {
  const component = shallow(<PureSpinner fill="white" isIe={false} />);

  t.equals(
    component.find('.spinner-normal').length,
    1,
    'Should load the regular variant.'
  );

  t.end();
});
