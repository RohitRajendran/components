import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import AccountCircleIllustration from './AccountCircleIllustration';

test('AccountCircleIllustration - renders', (t) => {
  const component = shallow(<AccountCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('AccountCircleIllustration - handleClick', (t) => {
  const component = mount(<AccountCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
