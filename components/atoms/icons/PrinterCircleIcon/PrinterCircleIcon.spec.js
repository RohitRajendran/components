import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import PrinterCircleIcon from './PrinterCircleIcon';

test('PrinterCircleIcon - renders', (t) => {
  const component = shallow(<PrinterCircleIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the PrinterCircleIcon component.',
  );

  t.end();
});
