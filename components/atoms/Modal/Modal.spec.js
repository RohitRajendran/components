import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import Modal from './Modal';

test('Modal - Should open the modal when the label is pressed', (t) => {
  const props = {
    defaultOpen: false,
    preventClose: false,
    label: 'Open Modal',
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

  component.find('.uic--modal-label').simulate('click');

  t.deepEquals(
    component.state().show,
    true,
    'Expect the show state to be true.'
  );

  t.end();
});

test('Modal - Should open the modal when the label is pressed via the keyboard.', (t) => {
  const props = {
    defaultOpen: false,
    preventClose: false,
    label: 'Open Modal',
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

  component.find('.uic--modal-close').simulate('keypress', {keyCode: 13});

  t.deepEquals(
    component.state().show,
    true,
    'Expect the show state to be true.'
  );

  t.end();
});

test('Modal - handleKeyPress', (t) => {
  t.plan(2);

  const props = {
    defaultOpen: false,
    preventClose: false,
    label: 'Open Modal',
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
    component.state().show,
    false,
    'Should not toggle the state has key code 12 is not enter.'
  );

  component.instance().handleKeyPress({keyCode: 13});

  t.deepEquals(
    component.state().show,
    true,
    'Should toggle the show state as enter/return has been pressed.'
  );

  t.end();
});

test('Modal - handleClick', (t) => {
  const props = {
    defaultOpen: false,
    preventClose: false,
    label: 'Open Modal',
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

  t.deepEquals(component.state().show, true, 'Should toggle the show state.');

  t.end();
});
