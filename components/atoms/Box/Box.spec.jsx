import {mount, shallow} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';
import Box from './Box.tsx';

test('Box - renders', (t) => {
  const component = shallow(<Box />);

  t.equals(component.find('div').length, 1, 'Should load the Box component.');

  t.end();
});

test('Box - renders with an icon', (t) => {
  const component = shallow(<Box icon={CarCircleIllustration} />);

  t.equals(component.find('div').length, 1, 'Should load the Box component.');

  t.end();
});

test('Box - renders disabled with check', (t) => {
  const component = shallow(
    <Box icon={CarCircleIllustration} disabled={true} showCheck={true} />,
  );

  t.equals(
    component.find('.uic--box__disabled').length,
    1,
    'Should load the Box component with disabled class.',
  );
  t.equals(component.find('CheckIcon').length, 1, 'Shows check');
  t.end();
});

test('Box - should hand back the value onClick', (t) => {
  const props = {
    value: 'montezuma',
    label: 'the best cat',
    description: 'v ginger and v good',
    onClick: stub(),
  };
  const component = mount(<Box {...props} />);

  component
    .find('.uic--box')
    .at(0)
    .prop('onClick')({
    stopPropagation: stub(),
  });

  t.deepEquals(
    props.onClick.args[0][0],
    'montezuma',
    'The montezuma box was selected.',
  );

  t.end();
});

test('Box - handleHover', (t) => {
  const props = {
    value: 'montezuma',
    label: 'the best cat',
    description: 'v ginger and v good',
    onClick: stub(),
  };
  const component = mount(<Box {...props} />);

  t.deepEquals(component.state().hover, false, 'Defaults to false.');

  component.instance().handleHover();

  t.deepEquals(component.state().hover, true, 'Hover state should be true.');

  t.end();
});
