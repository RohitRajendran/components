import React from 'react';
import {storiesOf} from '@storybook/react';
import ChanceOfSuccess from '../../components/ChanceOfSuccess';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ChanceOfSuccessReadMe from '../../components/ChanceOfSuccess/README.md';

const stories = storiesOf('Atoms/ChanceOfSuccess', module);

stories.addDecorator(withKnobs).add(
  'default',
  withReadme(ChanceOfSuccessReadMe, () => (
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
  ))
);

stories.addDecorator(withKnobs).add(
  'draft plan',
  withReadme(ChanceOfSuccessReadMe, () => (
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
  ))
);

stories.addDecorator(withKnobs).add(
  'compact',
  withReadme(ChanceOfSuccessReadMe, () => (
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
  ))
);

stories.addDecorator(withKnobs).add(
  'running plan',
  withReadme(ChanceOfSuccessReadMe, () => (
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
  ))
);
