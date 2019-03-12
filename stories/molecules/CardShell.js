import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import CardShell from '../../components/CardShell/CardShell';
import CardShellReadme from '../../components/CardShell/CardShell.md';

const stories = storiesOf('Molecules/CardShell', module);

const defaultProps = (isCollapsed = false) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  loading: boolean('loading', false),
  summary: <h1>Collapsed summary content</h1>,
});

stories.addDecorator(withKnobs).add(
  'active',
  withReadme(CardShellReadme, () => (
    <CardShell {...defaultProps(false)}>
      <h1>Some card content</h1>
    </CardShell>
  ))
);

stories.addDecorator(withKnobs).add(
  'collapsed',
  withReadme(CardShellReadme, () => (
    <CardShell {...defaultProps(true)}>
      <h1>Some card content</h1>
    </CardShell>
  ))
);
