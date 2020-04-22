import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import StepBox from './StepBox';

test('StepBox - shows all of the steps', (t) => {
  try {
    const props = {
      steps: [
        {
          stepLabel: 'Answer a Series of Questions',
          buttonLabel: 'Questions',
          buttonOptions: {
            to: 'url',
          },
        },
        {
          stepLabel: 'Analyze Your Plan Results',
          buttonLabel: 'Questions',
          buttonOptions: {
            to: 'url',
          },
        },
        {
          stepLabel: 'Confirm Your Plan',
          buttonLabel: 'Questions',
          buttonOptions: {
            to: 'url',
          },
        },
      ],
      current: 1,
    };

    const {getByText} = render(<StepBox {...props} />);

    t.true(getByText(props.steps[0].stepLabel));
    t.true(getByText(props.steps[0].buttonLabel));
    t.true(getByText(props.steps[1].stepLabel));
    t.true(getByText(props.steps[1].buttonLabel));
    t.true(getByText(props.steps[2].stepLabel));
    t.true(getByText(props.steps[2].buttonLabel));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('StepBox - shows the correct steps', (t) => {
  try {
    const props = {
      steps: [
        {
          stepLabel: 'Answer a Series of Questions',
          buttonLabel: 'Questions',
          buttonOptions: {
            to: 'url',
          },
        },
        {
          stepLabel: 'Analyze Your Plan Results',
          buttonLabel: 'Questions',
          buttonOptions: {
            to: 'url',
          },
        },
        {
          stepLabel: 'Confirm Your Plan',
          buttonLabel: 'Questions',
          buttonOptions: {
            to: 'url',
          },
        },
      ],
      current: 1,
    };

    const {container} = render(<StepBox {...props} />);

    t.equals(
      container.querySelectorAll('.uic--step-box__inner--check').length,
      1,
      'Should show one one check',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
