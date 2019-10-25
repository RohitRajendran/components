import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import GiftCircleIllustration from './GiftCircleIllustration';

test('GiftCircleIllustration - renders', (t) => {
  const component = shallow(<GiftCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GiftIllustration component.'
  );

  t.end();
});

test('GiftCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<GiftCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GiftIllustration component.'
  );

  t.end();
});

test('GiftCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<GiftCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GiftIllustration component.'
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
