import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import PaginationControls from './PaginationControls';

test('PaginationControls - renders', (t) => {
  const component = shallow(<PaginationControls />);

  t.equals(component.find('div').length, 1, 'Should load the PaginationControls component.');

  t.end();
});
