import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import GiftCircleIllustration from './GiftCircleIllustration';

test('GiftCircleIllustration - renders', (t) => {
  const component = shallow(<GiftCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('GiftCircleIllustration - handleClick', (t) => {
  const component = mount(<GiftCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
