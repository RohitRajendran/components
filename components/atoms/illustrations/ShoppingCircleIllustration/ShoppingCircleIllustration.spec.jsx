import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ShoppingCircleIllustration from './ShoppingCircleIllustration';

test('ShoppingCircleIllustration - renders', (t) => {
  const component = shallow(<ShoppingCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ShoppingCircleIllustration component.',
  );

  t.end();
});

test('ShoppingCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<ShoppingCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ShoppingCircleIllustration component.',
  );

  t.end();
});

test('ShoppingCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<ShoppingCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ShoppingCircleIllustration component.',
  );

  t.end();
});

test('ShoppingCircleIllustration - handleClick', (t) => {
  const component = mount(<ShoppingCircleIllustration />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
