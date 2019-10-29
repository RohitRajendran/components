import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import RamenCircleIllustration from './RamenCircleIllustration';

test('RamenCircleIllustration - renders', (t) => {
  const component = shallow(<RamenCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the RamenCircleIllustration component.',
  );

  t.end();
});

test('RamenCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<RamenCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the RamenCircleIllustration component.',
  );

  t.end();
});

test('RamenCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<RamenCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the RamenCircleIllustration component.',
  );

  t.end();
});

test('RamenCircleIllustration - handleClick', (t) => {
  const component = mount(<RamenCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
