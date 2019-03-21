import React from 'react';
import test from 'tape';
import {shallow, mount} from 'enzyme';
import {spy, stub} from 'sinon';
import Slider from './Slider';

test('Slider - renders', (t) => {
  const component = shallow(
    <Slider
      name="slider"
      value={8}
      tooltipStickyVariant="green"
      onChange={spy()}
    />
  );
  t.pass('the component rendered!');

  t.equal(
    component.find('.tooltip-sticky-hint.show').length,
    0,
    'The sticky dot should not be present.'
  );

  const component2 = shallow(
    <Slider
      name="test"
      value={7}
      tooltipStickyPosition={5}
      tooltipStickyHint={<div>This is a big deal</div>}
      tooltipStickyVariant="green"
      onChange={spy()}
    />
  );
  t.equal(
    component2.find('.tooltip-sticky-hint.show').length,
    1,
    'The sticky hint should be present.'
  );

  t.end();
});

test('Slider - onChange', (t) => {
  t.plan(1);

  const props = {
    onChange: stub(),
    name: 'test',
    value: 7,
    tooltipStickyPosition: 5,
  };

  const component = mount(<Slider {...props} />);

  component
    .find('Slider')
    .at(0)
    .prop('onChange')();

  t.equals(
    props.onChange.callCount,
    1,
    'Should fire the onChange handler correctly when prompted.'
  );
  t.end();
});
