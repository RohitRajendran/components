import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {stub} from 'sinon';
import Cabinet from './Cabinet';

test('Cabinet - handleKeyPress', (t) => {
  t.plan(2);

  const props = {
    name: 'Cabinet1',
    show: false,
    preventClose: false,
    label: <div>Open Cabinet</div>,
    toggle: stub(),
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
    </Cabinet>
  );

  component.instance().handleKeyPress({keyCode: 12});

  t.deepEquals(
    props.toggle.callCount,
    0,
    'Should not toggle the Cabinet as key code 12 is not enter.'
  );

  component.instance().handleKeyPress({keyCode: 13});

  t.deepEquals(
    props.toggle.callCount,
    1,
    'Should toggle the Cabinet as enter/return has been pressed.'
  );

  t.end();
});

test('Cabinet - handleClick', (t) => {
  const props = {
    name: 'Cabinet2',
    show: false,
    preventClose: false,
    label: <div>Open Cabinet</div>,
    toggle: stub(),
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
    </Cabinet>
  );

  component.instance().handleClick();

  t.deepEquals(props.toggle.callCount, 1, 'Should toggle the Cabinet.');

  t.end();
});

test('Cabinet - handleClick (handleWithState)', (t) => {
  const props = {
    preventClose: false,
    label: <div>Open Cabinet</div>,
    handleWithState: true,
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
    </Cabinet>
  );

  component.instance().handleClick();

  t.deepEquals(
    component.state().show,
    true,
    'Should toggle the Cabinet state to true.'
  );

  t.end();
});

test('Cabinet - handleEscapePress', (t) => {
  const props = {
    name: 'Cabinet2',
    show: true,
    preventClose: false,
    label: <div>Open Cabinet</div>,
    toggle: stub(),
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
    </Cabinet>
  );

  component.instance().handleEscapePress({keyCode: 27});

  t.deepEquals(props.toggle.callCount, 1, 'Should toggle the Cabinet.');

  t.end();
});

test('Cabinet - handleEscapePress (handleWithState)', (t) => {
  const props = {
    preventClose: false,
    label: <div>Open Cabinet</div>,
    handleWithState: true,
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
    </Cabinet>
  );

  component.setState({show: true});

  component.instance().handleEscapePress({keyCode: 27});

  t.deepEquals(
    component.state().show,
    false,
    'Should toggle the Cabinet state to false.'
  );

  t.end();
});

test('Cabinet - handleDocumentClick', (t) => {
  const div = global.document.createElement('div');
  const props = {
    name: 'Cabinet3',
    show: true,
    preventClose: false,
    label: <div>Open Cabinet</div>,
    toggle: stub(),
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
    </Cabinet>,
    {attachTo: div}
  );

  component.instance().handleDocumentClick({
    target: global.document.createElement('div'),
  });

  t.deepEquals(
    props.toggle.callCount,
    1,
    'Should fire the toggle handler as the click is outside of the Cabinet.'
  );

  t.end();
});

test('Cabinet - componentWillUnmount', (t) => {
  const div = global.document.createElement('div');
  const props = {
    name: 'Cabinet4',
    show: true,
    preventClose: false,
    label: <div>Open Cabinet</div>,
    toggle: stub(),
  };

  const component = mount(
    <Cabinet {...props}>
      <h2>Montezuma is the best cat</h2>
      <p>You can place a paragraph about how good of a cat he is here</p>
      <div className="uic--Cabinet-bottom">
        <p>Additional content to place at the bottom of the Cabinet.</p>
      </div>
    </Cabinet>,
    {attachTo: div}
  );

  component.unmount();

  t.deepEquals(component.find('uic--cabinet'), {}, 'Should be empty.');

  t.end();
});
