import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import GiftCircleIllustration from '~components/atoms/illustrations/GiftCircleIllustration/GiftCircleIllustration';
import GivingCircleIllustration from '~components/atoms/illustrations/GivingCircleIllustration/GivingCircleIllustration';
import HealthCircleIllustration from '~components/atoms/illustrations/HealthCircleIllustration/HealthCircleIllustration';
import LampCircleIllustration from '~components/atoms/illustrations/LampCircleIllustration/LampCircleIllustration';
import RamenCircleIllustration from '~components/atoms/illustrations/RamenCircleIllustration/RamenCircleIllustration';
import ShoppingCircleIllustration from '~components/atoms/illustrations/ShoppingCircleIllustration/ShoppingCircleIllustration';
import BoxSelectCard from './BoxSelectCard';
import BoxSelectCardReadme from './BoxSelectCard.mdx';

const stories = storiesOf('Complex Organisms/BoxSelectCard', module);

stories.addParameters({
  docs: {
    page: BoxSelectCardReadme,
  },
});

const store = new Store({
  radioBtnQuestion: '',
});

store.subscribe(() => {
  forceReRender();
});

stories.addDecorator(StateDecorator(store));

const defaultProps = (
  isCollapsed = false,
  clearFuture = false,
  isLatestCard = false
) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  clearFuture: boolean('clearFuture', clearFuture),
  description: text('description', ''),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hasMadeChanges: boolean('hasMadeChanges', true),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  isFetching: boolean('isFetching', false),
  loading: boolean('loading', false),
  moreDetails: object('moreDetails', {}),
  shortTitle: 'Question',
  title: text('title', 'What type of spending need would you like to create?'),
  editCard: () => true,
  config: {
    name: 'boxSelectQuestion',
    value: store.get('boxSelectQuestion'),
    options: object('config.options', [
      {
        value: 'essentials',
        label: 'Essentials',
        description:
          'These are the basics: paying the bills and putting food on the table. They include your non-discretionary spending.',
        icon: LampCircleIllustration,
        disabled: true,
        showCheck: true,
      },
      {
        value: 'lifestyle',
        label: 'Lifestyle',
        description:
          'This is the fun stuff: entertainment, eating out, lawn care. It includes all  recurring, discretionary expenses.',
        icon: RamenCircleIllustration,
      },
      {
        value: 'healthcare',
        label: 'Healthcare',
        description:
          'This spending keeps you healthy. It includes your out-of-pocket health expenses and private insurance costs.',
        icon: HealthCircleIllustration,
      },
      {
        value: 'experience',
        label: 'Experience',
        description:
          'Experiences are for occasional expenses like travel, adventures, new cars, college tuition, and other similar costs.',
        icon: ShoppingCircleIllustration,
      },
      {
        value: 'gifts',
        label: 'Gifts & Donations',
        description:
          'Bequests are the legacy you leave when you die, including inheritances, end-of-life giving, and similar spending.',
        icon: GiftCircleIllustration,
      },
      {
        value: 'bequest',
        label: 'Bequest',
        description:
          'Bequests are the legacy you leave when you die, including inheritances, end-of-life giving, and similar spending.',
        icon: GivingCircleIllustration,
      },
    ]),
  },
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('active', () => (
  <BoxSelectCard {...defaultProps(false, false, true)} />
));

stories.add('editing and clears future', () => (
  <BoxSelectCard {...defaultProps(false, true, false)} />
));

stories.add('collapsed', () => (
  <BoxSelectCard {...defaultProps(true, false, false)} />
));

stories.add('incomplete collapsed', () => (
  <BoxSelectCard {...defaultProps(true, false, true)} />
));
