import React from 'react';
import test from 'tape';
import {shallow, mount} from 'enzyme';
import {spy, stub} from 'sinon';
import {PureSlider} from './Slider';

test('Slider - renders', (t) => {
  const component = shallow(
    <PureSlider
      name="slider"
      value={8}
      tooltipStickyVariant="green"
      onChange={spy()}
    />
  );
  t.pass('the component rendered!');

  t.equal(
    component.find('.uic--tooltip-sticky-hint.uic--show').length,
    0,
    'The sticky dot should not be present.'
  );

  const component2 = shallow(
    <PureSlider
      name="test"
      value={7}
      tooltipStickyPosition={5}
      tooltipStickyHint={<div>This is a big deal</div>}
      tooltipStickyVariant="green"
      onChange={spy()}
    />
  );
  t.equal(
    component2.find('.uic--tooltip-sticky-hint.uic--show').length,
    1,
    'The sticky hint should be present.'
  );

  t.end();
});

test('Slider - onChange', (t) => {
  t.plan(2);

  const props = {
    onChange: stub(),
    name: 'test',
    value: 7,
    tooltipStickyPosition: 5,
  };

  const component = mount(<PureSlider {...props} />);

  component
    .find('.uic--react-slider')
    .at(0)
    .prop('onChange')(5);

  t.equals(
    props.onChange.args[0][0],
    'test',
    'Should fire the onChange handler correctly when prompted.'
  );

  t.equals(
    props.onChange.args[0][1],
    5,
    'Should fire the onChange handler correctly when prompted.'
  );
});
