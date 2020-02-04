import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import LinkedInIcon from './LinkedInIcon';

test('LinkedInIcon - renders', (t) => {
  const component = shallow(<LinkedInIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LinkedInIcon component.',
  );

  t.end();
});
