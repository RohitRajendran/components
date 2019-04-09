import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import LampIllustration from './LampIllustration';

test('LampIllustration - renders', (t) => {
  const component = shallow(<LampIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});
