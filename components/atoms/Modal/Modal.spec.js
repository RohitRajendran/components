import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {stub} from 'sinon';
import Modal from './Modal';

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

test('HogwartsCabinet - handleDocumentClick', (t) => {
  const props = {
    defaultOpen: true,
    preventClose: false,
    label: 'Open Modal',
  };

  const component = new Modal(props);

  const handleClickStub = stub(component, 'handleDocumentClick');

  component.modalNode.current = {contains: () => false};

  component.handleDocumentClick({});

  t.true(handleClickStub.called, 'handleClick called');

  t.end();
});
