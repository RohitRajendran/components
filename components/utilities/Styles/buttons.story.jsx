import React from 'react';
import {storiesOf} from '@storybook/react';
import ButtonsReadme from './buttons.mdx';

const stories = storiesOf('Utilities/Styles', module);

stories.addParameters({
  docs: {
    page: ButtonsReadme,
  },
});

const ButtonStyles = () => (
  <button className="uic--button-unstyled">
    This is an unstyled button! Useful for elements which behave like buttons
    but do not need the default button styling.
  </button>
);

stories.add('buttons', () => <ButtonStyles />);
