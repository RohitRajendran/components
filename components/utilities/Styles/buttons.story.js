import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import ButtonsReadme from './buttons.md';

const stories = storiesOf('Utilities/Styles', module);

const ButtonStyles = () => (
  <button className="uic--button-unstyled">
    This is an unstyled button! Useful for elements which behave like buttons
    but do not need the default button styling.
  </button>
);

stories.addDecorator(withReadme(ButtonsReadme));

stories.add('buttons', () => <ButtonStyles />);
