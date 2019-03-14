import React from 'react';
import {storiesOf} from '@storybook/react';
import ChanceOfSuccess from '../../components/ChanceOfSuccess/ChanceOfSuccess';
import {text, boolean, number} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ChanceOfSuccessReadme from '../../components/ChanceOfSuccess/ChanceOfSuccess.md';

const stories = storiesOf('Atoms/ChanceOfSuccess', module);

stories.addDecorator(withReadme(ChanceOfSuccessReadme));

stories.add('default', () => (
  <div style={{backgroundColor: 'black'}}>
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
  </div>
));

stories.add('draft plan', () => (
  <div style={{backgroundColor: 'black'}}>
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
  </div>
));

stories.add('compact', () => (
  <div style={{backgroundColor: 'black'}}>
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
  </div>
));

stories.add('running plan', () => (
  <div style={{backgroundColor: 'black'}}>
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
  </div>
));
