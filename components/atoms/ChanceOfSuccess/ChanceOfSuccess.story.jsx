import {boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {PureChanceOfSuccess as ChanceOfSuccess} from './ChanceOfSuccess';
import ChanceOfSuccessReadme from './ChanceOfSuccess.mdx';
import {storybookBackgrounds} from '~constants/js/colors';

const stories = storiesOf('Atoms/ChanceOfSuccess', module);

stories.addParameters({
  docs: {
    page: ChanceOfSuccessReadme,
  },
});
stories.addParameters({
  backgrounds: storybookBackgrounds.defaultRoyalBackground,
});

const defaultProps = ({percent, draft, running, compact}) => ({
  percent: number('percent', percent, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  }),
  isDraftPlan: boolean('isDraftPlan', draft),
  currentPlanChanceOfSuccess: number('currentPlanChanceOfSuccess'),
  refreshedPlanChanceOfSuccess: number('refreshedPlanChanceOfSuccess'),
  isRunningPlan: boolean('isRunningPlan', running),
  compact: boolean('compact', compact),
});

stories.add(
  'default',
  () => (
    <ChanceOfSuccess
      {...defaultProps({
        percent: 50,
        draft: false,
        running: false,
        compact: false,
      })}
    />
  ),
  {percy: {skip: true}},
);

stories.add(
  'draft plan',
  () => (
    <ChanceOfSuccess
      {...defaultProps({
        percent: 50,
        draft: true,
        running: false,
        compact: false,
      })}
    />
  ),
  {percy: {skip: true}},
);

stories.add(
  'compact',
  () => (
    <ChanceOfSuccess
      {...defaultProps({
        percent: 50,
        draft: false,
        running: false,
        compact: true,
      })}
    />
  ),
  {percy: {skip: true}},
);

stories.add(
  'running plan',
  () => (
    <ChanceOfSuccess
      {...defaultProps({draft: false, running: true, compact: false})}
    />
  ),
  {percy: {skip: true}},
);

stories.add(
  'missing percent',
  () => (
    <ChanceOfSuccess
      {...defaultProps({draft: false, running: false, compact: false})}
    />
  ),
  {percy: {skip: true}},
);
