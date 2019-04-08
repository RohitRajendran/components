import React from 'react';
import {storiesOf} from '@storybook/react';
import {PureChanceOfSuccess as ChanceOfSuccess} from './ChanceOfSuccess';
import {text, boolean, number} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ChanceOfSuccessReadme from './ChanceOfSuccess.md';

const stories = storiesOf('Atoms/ChanceOfSuccess', module);

stories.addDecorator(withReadme(ChanceOfSuccessReadme));

stories.add('default', () => (
  <ChanceOfSuccess
    percent={number('percent', 50, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    })}
    isDraftPlan={boolean('isDraftPlan', false)}
    currentPlanChanceOfSuccess={number('currentPlanChanceOfSuccess')}
    refreshedPlanChanceOfSuccess={number('refreshedPlanChanceOfSuccess')}
    identifier={text('identifier')}
    isRunningPlan={boolean('isRunningPlan', false)}
    className={text('className')}
    compact={boolean('compact', false)}
  />
));

stories.add('draft plan', () => (
  <ChanceOfSuccess
    percent={number('percent', 50, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    })}
    isDraftPlan={boolean('isDraftPlan', true)}
    currentPlanChanceOfSuccess={number('currentPlanChanceOfSuccess')}
    refreshedPlanChanceOfSuccess={number('refreshedPlanChanceOfSuccess')}
    identifier={text('identifier')}
    isRunningPlan={boolean('isRunningPlan', false)}
    className={text('className')}
    compact={boolean('compact', false)}
  />
));

stories.add('compact', () => (
  <ChanceOfSuccess
    percent={number('percent', 50, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    })}
    isDraftPlan={boolean('isDraftPlan', false)}
    currentPlanChanceOfSuccess={number('currentPlanChanceOfSuccess')}
    refreshedPlanChanceOfSuccess={number('refreshedPlanChanceOfSuccess')}
    identifier={text('identifier')}
    isRunningPlan={boolean('isRunningPlan', false)}
    className={text('className')}
    compact={boolean('compact', true)}
  />
));

stories.add('running plan', () => (
  <ChanceOfSuccess
    percent={number('percent', null, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    })}
    isDraftPlan={boolean('isDraftPlan', false)}
    currentPlanChanceOfSuccess={number('currentPlanChanceOfSuccess')}
    refreshedPlanChanceOfSuccess={number('refreshedPlanChanceOfSuccess')}
    identifier={text('identifier')}
    isRunningPlan={boolean('isRunningPlan', true)}
    className={text('className')}
    compact={boolean('compact', false)}
  />
));
