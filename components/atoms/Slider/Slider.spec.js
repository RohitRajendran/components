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
    .prop('onChange')(5);

  t.equals(
    props.onChange.args[0][0],
    5,
    'Should fire the onChange handler correctly when prompted.'
  );

  t.end();
});
