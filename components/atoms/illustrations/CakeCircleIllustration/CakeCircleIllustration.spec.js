import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import CakeCircleIllustration from './CakeCircleIllustration';

test('CakeCircleIllustration - renders', (t) => {
  const component = shallow(<CakeCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CakeCircleIllustration component.'
  );

  t.end();
});

test('CakeCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<CakeCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CakeCircleIllustration component.'
  );

  t.end();
});

test('CakeCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<CakeCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CakeCircleIllustration component.'
  );

  t.end();
});

test('CakeCircleIllustration - handleClick', (t) => {
  const component = mount(<CakeCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
