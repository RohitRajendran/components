import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import {MessageCard} from '../../components';
import MessageCardReadme from '../../components/Cards/MessageCard/MessageCard.md';

const stories = storiesOf('Organisims/MessageCard', module);

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
  loading: boolean('loading', false),
  shortTitle: 'Title',
  title: text('title', 'This is where the title goes.'),
  cardUrl: '/',
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
        <img
          alt="example"
          src="https://app.unitedincome.com/assets/images/pencil.svg"
          style={{height: 100, width: 100}}
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
