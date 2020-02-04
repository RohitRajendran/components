import {mount} from 'enzyme';
import React from 'react';
import {spy} from 'sinon';
import test from 'tape';
import BubbleNav from './BubbleNav';

test('BubbleNav - render', (t) => {
  const onChangeSpy = spy();
  const component = mount(
    <BubbleNav
      options={[{value: 'Yo'}, {value: 'Dawg'}]}
      value="Dawg"
      onChange={onChangeSpy}
    />,
  );

  t.equal(
    component.find('BubbleSelector').length,
    1,
    'Display bubble selector',
  );

  t.equal(
    component.find('BubbleDropdown').length,
    1,
    'Display bubble dropdown',
  );

  t.end();
});
