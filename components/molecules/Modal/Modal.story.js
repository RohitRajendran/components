import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Modal from './Modal';
import Button from '~components/atoms/Button/Button';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ModalReadme from './Modal.md';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Molecules/Modal', module);

const store = new Store({
  modal1: true,
  modal2: true,
});

stories
  .addDecorator(withReadme(ModalReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({modalName, defaultOpen, preventClose, label}) => ({
  name: modalName,
  defaultOpen: boolean('defaultOpen', defaultOpen),
  preventClose: boolean('preventClose', preventClose),
  label: text('label', label),
  show: store.get(modalName),
  toggle: (name, value) => store.set({[name]: value}),
});

stories.add('default', () => (
  <Modal
    {...defaultProps({
      modalName: 'modal1',
      defaultOpen: true,
      preventClose: false,
      label: 'Reveal Modal',
    })}
  >
    <h2>Is Montezuma the best cat?</h2>
    <p>He is really ginger, and very nice. He has a soft purr.</p>
    <div className="uic--modal-bottom">
      <Button
        variant="secondary"
        light={true}
        onClick={() => store.set({modal1: !store.get('modal1')})}
      >
        You are correct he is the best cat.
      </Button>
    </div>
  </Modal>
));

stories.add('prevent close', () => (
  <Modal
    {...defaultProps({
      modalName: 'modal2',
      defaultOpen: true,
      preventClose: true,
      label: 'Reveal Modal',
    })}
  >
    <h2>Montezuma is the best cat</h2>
    <p>Close this modal if you disagree.</p>
    <div className="uic--modal-bottom">
      <Button variant="secondary" light={true}>
        Certified the best
      </Button>
    </div>
  </Modal>
));
