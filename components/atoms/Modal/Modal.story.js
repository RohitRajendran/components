import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Modal from './Modal';
import Button from '~components/atoms/Button/Button';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ModalReadme from './Modal.md';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Atoms/Modal', module);

const store = new Store({
  displayModal2: true,
  displayModal3: true,
});

stories
  .addDecorator(withReadme(ModalReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({defaultOpen, preventClose, label}) => ({
  defaultOpen: boolean('defaultOpen', defaultOpen),
  preventClose: boolean('preventClose', preventClose),
  label: text('label', label),
});

stories.add('default', () => (
  <Modal
    {...defaultProps({
      defaultOpen: true,
      preventClose: false,
      label: 'Reveal Modal',
    })}
  >
    <h1>Is Montezuma the best cat?</h1>
    <p>He is really ginger, and very nice. He has a soft purr.</p>
    <div className="uic--modal-bottom">
      <Button variant="secondary" light={true}>
        You are correct he is the best cat.
      </Button>
    </div>
  </Modal>
));

stories.add('prevent close', () => (
  <Modal
    {...defaultProps({
      defaultOpen: true,
      preventClose: true,
      label: 'Reveal Modal',
    })}
  >
    <h1>Montezuma is the best cat</h1>
    <p>Close this modal if you disagree.</p>
    <div className="uic--modal-bottom">
      <Button variant="secondary" light={true}>
        Certified the best
      </Button>
    </div>
  </Modal>
));
