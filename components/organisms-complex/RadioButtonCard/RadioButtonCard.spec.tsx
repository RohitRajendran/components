import {cleanup, render} from '@testing-library/react';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import RadioButtonCard from './RadioButtonCard';

window.requestAnimationFrame = stub();

test('RadioButtonCard - renders', (t) => {
  const props = {
    onSubmit: stub(),
    title: 'Question',
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
      value: 'no',
    },
    onChange: stub(),
    cancelChanges: stub(),
    editCard: stub(),
  };

  const {getByText, container} = render(
    <RadioButtonCard {...props}>Content</RadioButtonCard>,
  );

  t.true(getByText(props.title), 'Shows the title');

  t.false(
    container.querySelectorAll('.uic--card-error').length > 0,
    'Does not show an error state',
  );

  t.equals(
    container.querySelectorAll('.uic--label-value').length,
    2,
    'Displays 2 values',
  );

  cleanup();
  t.end();
});

test('RadioButtonCard - shows answer if provided', (t) => {
  const props = {
    onSubmit: stub(),
    title: 'Question',
    description: 'Description',
    isCollapsed: true,
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
      value: 'no',
    },
    onChange: stub(),
    answers: ['Howdy'],
    cancelChanges: stub(),
    editCard: stub(),
  };

  const {getByText, container} = render(
    <RadioButtonCard {...props}>Content</RadioButtonCard>,
  );

  t.true(getByText(props.shortTitle), 'Shows the shortTitle');

  t.true(getByText(props.answers[0]), 'Shows answer');

  t.equals(
    container.querySelectorAll('.uic--label-value').length,
    0,
    'Does not show options',
  );

  t.false(
    container.querySelectorAll('.uic--card-error').length > 0,
    'Does not show an error state',
  );

  cleanup();
  t.end();
});

test('RadioButtonCard - renders(no answer, no value)', (t) => {
  const props = {
    onSubmit: stub(),
    title: 'Question',
    description: 'Description',
    isCollapsed: true,
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
    },
    onChange: stub(),
    cancelChanges: stub(),
    editCard: stub(),
  };

  const {getByText, container} = render(
    <RadioButtonCard {...props}>Content</RadioButtonCard>,
  );

  t.true(getByText(props.shortTitle), 'Shows the shortTitle');

  t.true(container.querySelectorAll('p').length === 1, 'Shows 1 p tag');

  const summary = container.querySelector('p') as HTMLParagraphElement;

  t.equal(summary.textContent, '', 'shows an empty p tag');

  t.equals(
    container.querySelectorAll('.uic--label-value').length,
    0,
    'Does not show options',
  );

  t.false(
    container.querySelectorAll('.uic--card-error').length > 0,
    'Does not show an error state',
  );

  cleanup();
  t.end();
});
