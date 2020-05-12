import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import PaginatedTile from './PaginatedTile';

test('PaginatedTile - renders', (t) => {
  const component = shallow(<PaginatedTile />);

  t.equals(component.find('div').length, 1, 'Should load the PaginatedTile component.');

  t.end();
});
