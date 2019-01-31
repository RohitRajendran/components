import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import Button from '../../components/Button';

test('Button - should render', (t) => {
  t.plan(1);

  const component = mount(<Button>Testing</Button>);

  t.true(true, 'is true');
});
