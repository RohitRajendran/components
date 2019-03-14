import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import QuestionCardReadme from '../../components/QuestionCard/QuestionCard.md';

const stories = storiesOf('Molecules/QuestionCard', module);

const defaultProps = (isCollapsed = false, clearFuture = false) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  clearFuture: boolean('clearFuture', clearFuture),
  description: text(
    'description',
    'This is where the optional description goes.'
  ),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', false),
  loading: boolean('loading', false),
  moreDetail: text('moreDetail'),
  shortTitle: text('shortTitle', 'Question'),
  summary: <h1>Collapsed summary content</h1>,
  title: text('title', 'This is where the question goes.'),
});

stories.addDecorator(withKnobs).add(
  'active',
  withReadme(QuestionCardReadme, () => (
    <QuestionCard {...defaultProps(false)}>
      <p>Some card content</p>
    </QuestionCard>
  ))
);

stories.addDecorator(withKnobs).add(
  'collapsed',
  withReadme(QuestionCardReadme, () => (
    <QuestionCard {...defaultProps(true)}>
      <p>Some card content</p>
    </QuestionCard>
  ))
);
