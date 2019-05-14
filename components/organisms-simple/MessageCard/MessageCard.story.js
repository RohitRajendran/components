import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import MessageCard from './MessageCard';
import MessageCardReadme from './MessageCard.md';
import LampCircleIllustration from '~components/atoms/illustrations/LampCircleIllustration/LampCircleIllustration';

const stories = storiesOf('Simple Organisms/MessageCard', module);

stories.addDecorator(withReadme(MessageCardReadme));

const defaultProps = (isCollapsed = false, isLatestCard = false) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  description: text(
    'description',
    'This is where the optional description goes.'
  ),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  isFetching: boolean('isFetching', false),
  loading: boolean('loading', false),
  shortTitle: 'Title',
  title: text('title', 'This is where the title goes.'),
  editCard: () => true,
});

stories.add('active', () => (
  <MemoryRouter key="question">
    <MessageCard {...defaultProps(false)} />
  </MemoryRouter>
));

stories.add('active with feature image', () => (
  <MemoryRouter key="question">
    <MessageCard
      {...defaultProps(false)}
      featureImage={<LampCircleIllustration height="10rem" width="10rem" />}
    />
  </MemoryRouter>
));

stories.add('collapsed', () => (
  <MemoryRouter key="question">
    <MessageCard {...defaultProps(true)} />
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <MessageCard {...defaultProps(true, true)} />
  </MemoryRouter>
));
