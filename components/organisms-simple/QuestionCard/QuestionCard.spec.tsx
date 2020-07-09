import {cleanup, render} from '@testing-library/react';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import QuestionCard from './QuestionCard';

window.requestAnimationFrame = stub();

test('QuestionCard - renders', (t) => {
  const props = {
    onSubmit: (): void => undefined,
    name: 'test',
    title: 'Question',
    shortTitle: 'Q',
    cancelChanges: (): boolean => true,
  };

  const {getByText, container} = render(
    <QuestionCard {...props}>Content</QuestionCard>,
  );

  t.true(getByText('Question'), 'Shows title');

  t.equals(
    container.querySelectorAll('p').length,
    0,
    'Should not show a description',
  );

  cleanup();
  t.end();
});

test('QuestionCard - shows description, more detail, and edit warning', (t) => {
  const props = {
    onSubmit: (): void => undefined,
    name: 'test',
    title: 'Question',
    description: 'Description',
    moreDetails: {
      cabinetContent: <div>Montezuma</div>,
      header: 'Test',
      label: 'Learn more about Montezuma',
    },
    shortTitle: 'Q',
    cancelChanges: (): boolean => true,
    hasMadeChanges: true,
    clearFuture: true,
    isLatestCard: false,
  };

  const {getByText} = render(<QuestionCard {...props}>Content</QuestionCard>);

  t.true(
    getByText(
      'Note: Changing your answer to this question will require you to answer additional questions.',
    ),

    'Should show warning text',
  );

  t.true(getByText(props.moreDetails.label), 'Should show more detail');

  t.true(getByText('Save Changes'), 'Should show Save Changes button');

  cleanup();
  t.end();
});

test('QuestionCard - collapsed', (t) => {
  const props = {
    onSubmit: (): void => undefined,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetails: {
      cabinetContent: <span>Test detail</span>,
      header: 'Test detail',
      visibleInPrint: false,
      label: 'Test detail',
    },
    isCollapsed: true,
    shortTitle: 'Q',
    cancelChanges: (): boolean => true,
  };

  const {getByText, container} = render(
    <QuestionCard {...props}>Content</QuestionCard>,
  );

  t.true(getByText('Summary'), 'Shows summary');
  t.false(
    container.querySelectorAll('.uic--card-error').length > 0,
    'Should not show error state',
  );

  cleanup();
  t.end();
});

test('QuestionCard - latest collapsed', (t) => {
  const props = {
    onSubmit: (): void => undefined,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetails: {
      cabinetContent: <span>Test detail</span>,
      header: 'Test detail',
      visibleInPrint: false,
      label: 'Test detail',
    },
    isCollapsed: true,
    isLatestCard: true,
    shortTitle: 'Q',
    cancelChanges: (): boolean => true,
  };

  const {getByText, container} = render(
    <QuestionCard {...props}>Content</QuestionCard>,
  );

  t.true(getByText('Q'), 'Shows incomplete summary');

  t.true(
    container.querySelectorAll('.uic--card-error').length > 0,
    'Should show error state',
  );

  cleanup();
  t.end();
});
