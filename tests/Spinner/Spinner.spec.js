import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import Spinner from '../../components/Spinner';

test('Spinner - renders', (t) => {
  shallow(<Spinner fill="white" />);
  t.pass('Renders');
  t.end();
});
