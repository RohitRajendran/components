import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import Box from './Box';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';

test('Box - renders', (t) => {
  const component = shallow(<Box />);

  t.equals(component.find('div').length, 1, 'Should load the Box component.');

  t.end();
});

test('Box - renders with an icon', (t) => {
  const component = shallow(<Box icon={CarCircleIllustration} />);

  t.equals(component.find('div').length, 1, 'Should load the Box component.');

  t.end();
});
