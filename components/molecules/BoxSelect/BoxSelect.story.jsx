import {Store} from '@sambego/storybook-state';
import {object} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import GiftCircleIllustration from '~components/atoms/illustrations/GiftCircleIllustration/GiftCircleIllustration.tsx';
import GivingCircleIllustration from '~components/atoms/illustrations/GivingCircleIllustration/GivingCircleIllustration.tsx';
import HealthCircleIllustration from '~components/atoms/illustrations/HealthCircleIllustration/HealthCircleIllustration.tsx';
import LampCircleIllustration from '~components/atoms/illustrations/LampCircleIllustration/LampCircleIllustration.tsx';
import RamenCircleIllustration from '~components/atoms/illustrations/RamenCircleIllustration/RamenCircleIllustration.tsx';
import ShoppingCircleIllustration from '~components/atoms/illustrations/ShoppingCircleIllustration/ShoppingCircleIllustration.tsx';
import BoxSelect from './BoxSelect';
import BoxSelectReadMe from './BoxSelect.mdx';

const stories = storiesOf('Molecules/BoxSelect', module);

stories.addParameters({
  docs: {
    page: BoxSelectReadMe,
  },
});

const store = new Store({
  boxGroup: '',
  preSelected: 'experience',
});

store.subscribe(() => {
  forceReRender();
});

const items = [
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
      'This spending keeps f-pocket health expenses and private insurance costsf-pocket health expenses and private insurance costsf-pocket health expenses and private insurance costsyou healthy. It includes your out-of-pocket health expenses and private insurance costs.',
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
];

const defaultProps = (groupName) => ({
  onChange: (name, value) => store.set({[name]: value}),
  value: store.get(groupName),
  name: groupName,
  options: object('options', items),
});

stories.add('default', () => <BoxSelect {...defaultProps('boxGroup')} />);
stories.add('selected', () => <BoxSelect {...defaultProps('preSelected')} />);
