import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ThumbsUpIcon from './ThumbsUpIcon';

test('ThumbsUpIcon - renders', (t) => {
  const component = shallow(<ThumbsUpIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ThumbsUpIcon component.'
  );

  t.end();
});
