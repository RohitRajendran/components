import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import ArrowEllipsisIcon from './ArrowEllipsisIcon';

test('ArrowEllipsisIcon - renders', (t) => {
  const component = shallow(<ArrowEllipsisIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ArrowEllipsisIcon component.'
  );

  t.end();
});
