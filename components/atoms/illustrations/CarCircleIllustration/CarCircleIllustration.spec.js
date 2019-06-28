import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import CarCircleIllustration from './CarCircleIllustration';

test('CarCircleIllustration - renders', (t) => {
  const component = shallow(<CarCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CarCircleIllustration component.'
  );

  t.end();
});

test('CarCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<CarCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CarCircleIllustration component.'
  );

  t.end();
});

test('CarCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<CarCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CarCircleIllustration component.'
  );

  t.end();
});

test('CarCircleIllustration - handleClick', (t) => {
  const component = mount(<CarCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
