import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import HomeCircleIllustration from './HomeCircleIllustration';

test('HomeCircleIllustration - renders', (t) => {
  const component = shallow(<HomeCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HomeCircleIllustration component.',
  );

  t.end();
});

test('HomeCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<HomeCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HomeCircleIllustration component.',
  );

  t.end();
});

test('HomeCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<HomeCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HomeCircleIllustration component.',
  );

  t.end();
});

test('HomeCircleIllustration - handleClick', (t) => {
  const component = mount(<HomeCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
