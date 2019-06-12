import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
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

stories.add('active', () => <MessageCard {...defaultProps(false)} />);

stories.add('active with feature image', () => (
  <MessageCard
    {...defaultProps(false)}
    featureImage={<LampCircleIllustration height="10rem" width="10rem" />}
  />
));

stories.add('collapsed', () => <MessageCard {...defaultProps(true)} />);

stories.add('incomplete collapsed', () => (
  <MessageCard {...defaultProps(true, true)} />
));
