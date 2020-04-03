import {mount} from 'enzyme';
import React from 'react';
import test from 'tape';
import QuestionCard from './QuestionCard';

test('QuestionCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    shortTitle: 'Q',
    cancelChanges: () => true,
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(comp.find('h2').first().text(), 'Question', 'Shows title');

  t.equals(comp.find('p').length, 0, 'Should not show a description');
  t.false(
    comp.find('CardShell').first().prop('hasError'),
    'Should not show error state',
  );
  t.end();
});

test('QuestionCard - shows description, more detail, and edit warning', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    moreDetails: {
      cabinetContent: <div>Montezuma</div>,
      header: 'Test',
      label: 'Learn more about Montezuma',
    },
    shortTitle: 'Q',
    cancelChanges: () => true,
    hasMadeChanges: true,
    clearFuture: true,
    isLatestCard: false,
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(
    comp.find('.uic--warning-message').length,
    1,
    'Should show warning text',
  );
  t.equals(comp.find('Cabinet').length, 1, 'Should show more detail');
  t.equals(comp.find('.uic--card-submit').first().text(), 'Save Changes');

  t.end();
});

test('QuestionCard - collapsed', (t) => {
  const props = {
    onSubmit: () => true,
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
    cancelChanges: () => true,
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(comp.find('h2').first().text(), 'Summary', 'Shows summary');
  t.false(
    comp.find('CardShell').first().prop('hasError'),
    'Should not show error state',
  );

  t.end();
});

test('QuestionCard - latest collapsed', (t) => {
  const props = {
    onSubmit: () => true,
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
    cancelChanges: () => true,
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(comp.find('h2').first().text(), 'Q', 'Shows incomplete summary');
  t.true(
    comp.find('CardShell').first().prop('hasError'),
    'Should show error state',
  );

  t.end();
});
