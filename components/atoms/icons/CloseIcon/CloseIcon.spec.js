import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import CloseIcon from './CloseIcon';

test('CloseIcon - renders', (t) => {
  const component = shallow(<CloseIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CloseIcon component.'
  );

  t.end();
});
