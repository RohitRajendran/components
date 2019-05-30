import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import CardShell from './CardShell';
import CardShellReadme from './CardShell.md';

const stories = storiesOf('Molecules/CardShell', module);

stories.addDecorator(withReadme(CardShellReadme));

const defaultProps = (isCollapsed = false) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isFetching: boolean('isFetching', false),
  loading: boolean('loading', false),
  summary: <h1>Collapsed summary content</h1>,
});

stories.add('active', () => (
  <CardShell {...defaultProps(false)}>
    <h1>Some card content</h1>
  </CardShell>
));

stories.add('collapsed', () => (
  <CardShell {...defaultProps(true)}>
    <h1>Some card content</h1>
  </CardShell>
));
