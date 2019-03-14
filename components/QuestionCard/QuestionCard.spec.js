import React from 'react';
import test from 'tape';
import {mount} from 'enzyme';
import QuestionCard from './QuestionCard';

test('QuestionCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    shortTitle: 'Q',
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(
    comp
      .find('h2')
      .first()
      .text(),
    'Question',
    'Shows title'
  );

  t.equals(comp.find('p').length, 0, 'Should not show a description');
  t.false(
    comp
      .find('CardShell')
      .first()
      .prop('hasError'),
    'Should not show error state'
  );
  t.end();
});

test('QuestionCard - shows description, more detail, and edit warning', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    moreDetail: <span>Test detail</span>,

    shortTitle: 'Q',
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(comp.find('p').length, 1, 'Should show a description');
  t.equals(comp.find('span').length, 1, 'Should show more detail');

  t.end();
});

test('QuestionCard - latest collapsed', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    isLatestCard: true,
    shortTitle: 'Q',
  };

  const comp = mount(<QuestionCard {...props}>Content</QuestionCard>);

  t.equals(
    comp
      .find('h2')
      .first()
      .text(),
    'Summary',
    'Shows summary'
  );
  t.true(
    comp
      .find('CardShell')
      .first()
      .prop('hasError'),
    'Should show error state'
  );

  t.end();
});
