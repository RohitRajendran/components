import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import TrashIcon from './TrashIcon';

test('TrashIcon - renders', (t) => {
  const component = shallow(<TrashIcon fill="white" />);

  t.equals(
    component.find('TrashIcon').length,
    1,
    'Should load the TrashIcon component.'
  );

  t.end();
});
