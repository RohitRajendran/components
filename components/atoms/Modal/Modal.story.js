import React from 'react';
import {storiesOf} from '@storybook/react';
import Modal from './Modal';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ModalReadme from './Modal.md';

const stories = storiesOf('Atoms/Modal', module);

stories.addDecorator(withReadme(ModalReadme));

const defaultProps = () => ({
  label: 'The moodal',
});

stories.add('default', () => <Modal {...defaultProps()} />);
