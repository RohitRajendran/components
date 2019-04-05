import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf, forceReRender} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import MessageCard from './MessageCard';
import MessageCardReadme from './MessageCard.md';
import LampIllustration from '~components/atoms/illustrations/LampIllustration/LampIllustration';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Simple Organisms/MessageCard', module);

const store = new Store({
  on: false,
});

store.subscribe(() => {
  forceReRender();
});

stories
  .addDecorator(withReadme(MessageCardReadme))
  .addDecorator(StateDecorator(store));

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
      featureImage={
        <LampIllustration
          height="100"
          width="100"
          on={store.get('on')}
          onClick={() => store.set({on: !store.get('on')})}
        />
      }
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
