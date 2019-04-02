import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {stub} from 'sinon';
import Modal from './Modal';

test('Modal - handleKeyPress', (t) => {
  t.plan(2);

  const props = {
    name: 'modal1',
    show: false,
    preventClose: false,
    label: <div>Open Modal</div>,
    toggle: stub(),
  };

  const component = mount(
    <Modal {...props}>
      <h1>Montezuma is the best cat</h1>
      <p>You can place a paragraph about how good of a cat he is here</p>
      <div className="uic--modal-bottom">
        <p>Additional content to place at the bottom of the modal.</p>
      </div>
    </Modal>
  );

  component.instance().handleKeyPress({keyCode: 12});

  t.deepEquals(
    props.toggle.callCount,
    0,
    'Should not toggle the modal as key code 12 is not enter.'
  );

  component.instance().handleKeyPress({keyCode: 13});

  t.deepEquals(
    props.toggle.callCount,
    1,
    'Should toggle the modal as enter/return has been pressed.'
  );

  t.end();
});

test('Modal - handleClick', (t) => {
  const props = {
    name: 'modal2',
    show: false,
    preventClose: false,
    label: <div>Open Modal</div>,
    toggle: stub(),
  };

  const component = mount(
    <Modal {...props}>
      <h1>Montezuma is the best cat</h1>
      <p>You can place a paragraph about how good of a cat he is here</p>
      <div className="uic--modal-bottom">
        <p>Additional content to place at the bottom of the modal.</p>
      </div>
    </Modal>
  );

  component.instance().handleClick();

  t.deepEquals(props.toggle.callCount, 1, 'Should toggle the modal.');

  t.end();
});

test('Modal - handleEscapePress', (t) => {
  const props = {
    name: 'modal2',
    show: true,
    preventClose: false,
    label: <div>Open Modal</div>,
    toggle: stub(),
  };

  const component = mount(
    <Modal {...props}>
      <h1>Montezuma is the best cat</h1>
      <p>You can place a paragraph about how good of a cat he is here</p>
      <div className="uic--modal-bottom">
        <p>Additional content to place at the bottom of the modal.</p>
      </div>
    </Modal>
  );

  component.instance().handleEscapePress({keyCode: 27});

  t.deepEquals(props.toggle.callCount, 1, 'Should toggle the modal.');

  t.end();
});

test('Modal - handleDocumentClick', (t) => {
  const div = global.document.createElement('div');
  const props = {
    name: 'modal3',
    show: true,
    preventClose: false,
    label: <div>Open Modal</div>,
    toggle: stub(),
  };

  const component = mount(
    <Modal {...props}>
      <h1>Montezuma is the best cat</h1>
      <p>You can place a paragraph about how good of a cat he is here</p>
      <div className="uic--modal-bottom">
        <p>Additional content to place at the bottom of the modal.</p>
      </div>
    </Modal>,
    {attachTo: div}
  );

  component.instance().handleDocumentClick({
    target: global.document.createElement('div'),
  });

  t.deepEquals(
    props.toggle.callCount,
    1,
    'Should fire the toggle handler as the click is outside of the modal.'
  );

  t.end();
});

test('Modal - componentWillUnmount', (t) => {
  const div = global.document.createElement('div');
  const props = {
    name: 'modal4',
    show: true,
    preventClose: false,
    label: <div>Open Modal</div>,
    toggle: stub(),
  };

  const component = mount(
    <Modal {...props}>
      <h1>Montezuma is the best cat</h1>
      <p>You can place a paragraph about how good of a cat he is here</p>
      <div className="uic--modal-bottom">
        <p>Additional content to place at the bottom of the modal.</p>
      </div>
    </Modal>,
    {attachTo: div}
  );

  component.unmount();

  t.deepEquals(component.find('uic--modal-wrapper'), {}, 'Should be empty.');

  t.end();
});
