import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ShoppingCircleIllustration from './ShoppingCircleIllustration';

test('ShoppingCircleIllustration - renders', (t) => {
  const component = shallow(<ShoppingCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('ShoppingCircleIllustration - handleClick', (t) => {
  const component = mount(<ShoppingCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
