import {mount} from 'enzyme';
import React from 'react';
import {spy, stub} from 'sinon';
import test from 'tape';
import StackableExpandCollapse from './StackableExpandCollapse';
import * as DetectBrowser from '~components/utilities/DetectBrowser/DetectBrowser';

test('StackableExpandCollapse - render', (t) => {
  // JSDOM doesn't support custom CSS properties or the DOM API around them,
  // so we can not do anything with refs and element styles right now
  const setContentHeightSpy = spy(
    StackableExpandCollapse.prototype,
    'setContentHeight',
  );

  const component = mount(
    <StackableExpandCollapse label="Hi Everybody">
      <div>Yo</div>
    </StackableExpandCollapse>,
  );

  t.equal(
    component.find('.uic--stackable-expand-collapse').length,
    1,
    'Should load the StackableExpandCollapse component.',
  );

  t.equal(
    component.find('.uic--stackable-expand-collapse-clickable').text(),
    'Hi Everybody',
    'Text label is correct',
  );

  t.true(setContentHeightSpy.calledOnce, 'Set content height on mount');

  setContentHeightSpy.resetHistory();
  component.setProps({children: <div>Bye</div>});

  t.true(
    setContentHeightSpy.calledOnce,
    'Set content height on children change',
  );

  t.end();
});

test('StackableExpandCollapse - expand/collapse', (t) => {
  const component = mount(
    <StackableExpandCollapse label="Text">
      <div />
    </StackableExpandCollapse>,
  );

  t.equal(component.state().isExpanded, false, 'Component starts collapsed');

  component.find('.uic--stackable-expand-collapse-clickable').simulate('click');

  t.equal(component.state().isExpanded, true, 'Component expands on click');

  t.end();
});

test('StackableExpandCollapse - handleResize (window exists)', (t) => {
  const isWindowDefinedStub = stub(DetectBrowser, 'isWindowDefined').returns(
    true,
  );
  const removeSpy = spy(window, 'removeEventListener');
  const props = {
    label: 'Hello I am a label',
    children: <div>I am a child</div>,
  };
  const component = mount(<StackableExpandCollapse {...props} />);

  component.instance().handleResize();
  t.pass();

  component.unmount();
  t.true(removeSpy.calledOnce, 'Should trigger removeEventListener');

  removeSpy.restore();
  isWindowDefinedStub.restore();
  t.end();
});

test('StackableExpandCollapse - handleResize (window does not exist)', (t) => {
  const isWindowDefinedStub = stub(DetectBrowser, 'isWindowDefined').returns(
    false,
  );
  const removeSpy = spy(window, 'removeEventListener');
  const props = {
    label: 'Hello I am a label',
    children: <div>I am a child</div>,
  };
  const component = mount(<StackableExpandCollapse {...props} />);

  component.unmount();
  t.false(removeSpy.called, 'Should NOT trigger removeEventListener');

  removeSpy.restore();
  isWindowDefinedStub.restore();
  t.end();
});
