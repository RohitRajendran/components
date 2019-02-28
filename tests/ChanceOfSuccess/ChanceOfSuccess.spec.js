import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import ChanceOfSuccess from '../../components/ChanceOfSuccess';

test('Spinner - renders', (t) => {
  shallow(<ChanceOfSuccess />);
  t.pass('Renders');
  t.end();
});
