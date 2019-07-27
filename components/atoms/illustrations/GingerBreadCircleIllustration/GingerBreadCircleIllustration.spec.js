import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import GingerBreadCircleIllustration from './GingerBreadCircleIllustration';

test('GingerBreadCircleIllustration - renders', (t) => {
  const component = shallow(<GingerBreadCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GingerBreadCircleIllustration component.'
  );

  t.end();
});

test('GingerBreadCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<GingerBreadCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GingerBreadCircleIllustration component.'
  );

  t.end();
});

test('GingerBreadCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<GingerBreadCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GingerBreadCircleIllustration component.'
  );

  t.end();
});

test('GingerBreadCircleIllustration - handleClick', (t) => {
  const component = mount(<GingerBreadCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
