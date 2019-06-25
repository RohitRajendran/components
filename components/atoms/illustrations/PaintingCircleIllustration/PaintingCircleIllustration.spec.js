import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import PaintingCircleIllustration from './PaintingCircleIllustration';

test('PaintingCircleIllustration - renders', (t) => {
  const component = shallow(<PaintingCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the PaintingCircleIllustration component.'
  );

  t.end();
});

test('PaintingCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<PaintingCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the PaintingCircleIllustration component.'
  );

  t.end();
});

test('PaintingCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<PaintingCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the PaintingCircleIllustration component.'
  );

  t.end();
});

test('PaintingCircleIllustration - handleClick', (t) => {
  const component = mount(<PaintingCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
