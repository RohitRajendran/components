import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import PrinterIcon from './PrinterIcon';

test('PrinterIcon - renders', (t) => {
  const component = shallow(<PrinterIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the PrinterIcon component.',
  );

  t.end();
});
