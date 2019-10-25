import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import TrashIcon from './TrashIcon';

test('TrashIcon - renders', (t) => {
  const component = shallow(<TrashIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the TrashIcon component.'
  );

  t.end();
});
