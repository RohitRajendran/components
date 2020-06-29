import React from 'react';
import {storiesOf} from '@storybook/react';
import StepBox from './StepBox';
import StepBoxReadMe from './StepBox.mdx';
import {number, object} from '@storybook/addon-knobs';

const stories = storiesOf('Molecules/StepBox', module);

stories.addParameters({
  docs: {
    page: StepBoxReadMe,
  },
});

const defaultProps = (steps) => ({
  current: number('current', 1, {
    range: true,
    min: 0,
    max: steps.length,
  }),
  steps: object('steps', steps),
});

stories.add('default', () => (
  <StepBox
    {...defaultProps([
      {
        stepLabel: 'Answer a Series of Questions',
      },
      {
        stepLabel: 'Analyze Your Plan Results',
      },
      {
        stepLabel: 'Confirm Your Plan',
      },
    ])}
  />
));

stories.add('with button', () => (
  <StepBox
    {...defaultProps([
      {
        stepLabel: 'Answer a Series of Questions',
        buttonLabel: 'Answer Questions',
        buttonOptions: {
          to: 'https://unitedincome.com',
        },
      },
      {
        stepLabel: 'Analyze Your Plan Results',
        buttonLabel: 'Analyze Your Plan',
        buttonOptions: {
          to: 'https://unitedincome.com',
        },
      },
      {
        stepLabel: 'Confirm Your Plan',
        buttonLabel: 'Confirm',
        buttonOptions: {
          to: 'https://unitedincome.com',
        },
      },
    ])}
  />
));
