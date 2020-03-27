import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import Portal from './Portal';

test('Portal - renders', (t) => {
  const component = shallow(
    <Portal>
      <div>Hello</div>
    </Portal>,
  );

  t.equals(
    component.find('div').length,
    1,
    'Should load the Portal component.',
  );

  t.end();
});
