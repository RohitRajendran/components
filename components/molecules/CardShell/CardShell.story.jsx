import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import Input from '~components/atoms/Input/Input';
import CardShell from './CardShell';
import CardShellReadme from './CardShell.mdx';

const stories = storiesOf('Molecules/CardShell', module);

stories.addParameters({
  docs: {
    page: CardShellReadme,
  },
});

const defaultProps = (
  isCollapsed = false,
  forceUnansweredQuestionError = false,
) => ({
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
  forceUnansweredQuestionError: boolean(
    'forceUnansweredQuestionError',
    forceUnansweredQuestionError,
  ),
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

stories.add('unanswered question error', () => (
  <CardShell {...defaultProps(false, true)}>
    <h1>Some card content</h1>
    <Input
      name="suffix"
      label="Suffix"
      options={[
        {
          value: 'valid',
          label: 'Montezuma is the best cat',
        },
        {
          value: 'invalid',
          label: 'Montezuma is not the best cat',
        },
      ]}
      placeholder="optional"
      value={''}
      required
    />
  </CardShell>
));
