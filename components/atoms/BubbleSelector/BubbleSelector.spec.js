import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import BubbleSelector from './BubbleSelector';

test('BubbleSelector - render', (t) => {
  const onChangeSpy = spy();
  const component = shallow(
    <BubbleSelector
      options={[{value: 'Yo'}, {value: 'Dawg'}]}
      value="Dawg"
      onChange={onChangeSpy}
    />
  );

  t.equal(
    component.find('.uic--bubble-selector__item').length,
    2,
    'Display two items'
  );

  component
    .find('button')
    .at(0)
    .simulate('click');

  t.true(onChangeSpy.withArgs('Yo').calledOnce, 'Call onChange with new value');

  t.end();
});
