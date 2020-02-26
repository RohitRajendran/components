import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import Tooltip from './Tooltip';

test('Tooltip - renders', (t) => {
  const component = shallow(<Tooltip label="Click me">Hello</Tooltip>);

  t.equals(
    component.find('span').length,
    1,
    'Should load the Tooltip component.',
  );

  t.end();
});
