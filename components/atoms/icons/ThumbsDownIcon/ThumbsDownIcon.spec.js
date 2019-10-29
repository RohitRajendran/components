import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ThumbsDownIcon from './ThumbsDownIcon';

test('ThumbsDownIcon - renders', (t) => {
  const component = shallow(<ThumbsDownIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ThumbsDownIcon component.',
  );

  t.end();
});
