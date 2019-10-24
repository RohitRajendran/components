import {mount} from 'enzyme';
import React from 'react';
import {spy} from 'sinon';
import test from 'tape';
import StackableExpandCollapse from './StackableExpandCollapse';

test('StackableExpandCollapse - render', (t) => {
  // JSDOM doesn't support custom CSS properties or the DOM API around them,
  // so we can not do anything with refs and element styles right now
  const setContentHeightSpy = spy(
    StackableExpandCollapse.prototype,
    'setContentHeight'
  );

  const component = mount(
    <StackableExpandCollapse label="Hi Everybody">
      <div>Yo</div>
    </StackableExpandCollapse>
  );

  t.equal(
    component.find('.uic--stackable-expand-collapse').length,
    1,
    'Should load the StackableExpandCollapse component.'
  );

  t.equal(
    component.find('.uic--stackable-expand-collapse-clickable').text(),
    'Hi Everybody',
    'Text label is correct'
  );

  t.true(setContentHeightSpy.calledOnce, 'Set content height on mount');

  setContentHeightSpy.resetHistory();
  component.setProps({children: <div>Bye</div>});

  t.true(
    setContentHeightSpy.calledOnce,
    'Set content height on children change'
  );

  t.end();
});

test('StackableExpandCollapse - expand/collapse', (t) => {
  const component = mount(
    <StackableExpandCollapse label="Text">
      <div />
    </StackableExpandCollapse>
  );

  t.equal(component.state().isExpanded, false, 'Component starts collapsed');

  component.find('.uic--stackable-expand-collapse-clickable').simulate('click');

  t.equal(component.state().isExpanded, true, 'Component expands on click');

  t.end();
});
