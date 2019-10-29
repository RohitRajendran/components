import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import MoneyCircleIllustration from './MoneyCircleIllustration';

test('MoneyCircleIllustration - renders', (t) => {
  const component = shallow(<MoneyCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the MoneyCircleIllustration component.',
  );

  t.end();
});

test('MoneyCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<MoneyCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the MoneyCircleIllustration component.',
  );

  t.end();
});

test('MoneyCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<MoneyCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the MoneyCircleIllustration component.',
  );

  t.end();
});

test('MoneyCircleIllustration - handleClick', (t) => {
  const component = mount(<MoneyCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
