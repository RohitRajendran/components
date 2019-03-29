import React from 'react';
import {storiesOf} from '@storybook/react';
import Modal from './Modal';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ModalReadme from './Modal.md';

const stories = storiesOf('Atoms/Modal', module);

stories.addDecorator(withReadme(ModalReadme));

const defaultProps = ({defaultOpen, preventClose}) => ({
  defaultOpen: boolean('defaultOpen', defaultOpen),
  preventClose: boolean('preventClose', preventClose),
  label: text('label', 'open modal'),
});

stories.add('default', () => <Modal {...defaultProps({defaultOpen: false, preventClose: false})} />);

stories.add('open', () => <Modal {...defaultProps({defaultOpen: true})} />);

stories.add('prevent close', () => <Modal {...defaultProps({defaultOpen: true, preventClose: true})} />);