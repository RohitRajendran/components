import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {stub} from 'sinon';
import test from 'tape';
import InputCard from './InputCard';

test('InputCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    title: 'Question',
    shortTitle: 'Q',
    inputOptions: {
      name: 'yesNo',
      type: 'text',
      label: 'value',
      value: '',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

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

  t.true(
    comp
      .find('.card-submit')
      .first()
      .prop('disabled'),
    'Continue should be disabled since no value'
  );

  t.end();
});

test('InputCard - collapsed with answer override', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    inputOptions: {
      name: 'yesNo',
      type: 'text',
      value: 'no',
      label: 'value',
    },
    onChange: stub(),
    answers: ['Yup'],
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <InputCard {...props}>Content</InputCard>
    </MemoryRouter>
  );

  t.equals(
    comp
      .find('p')
      .first()
      .text(),
    'Yup',
    'Shows answer'
  );
  t.false(
    comp
      .find('CardShell')
      .first()
      .prop('hasError'),
    'Should not show error state'
  );

  t.end();
});

test('InputCard - collapsed without answer override', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    inputOptions: {
      name: 'yesNo',
      type: 'text',
      value: 'no',
      label: 'value',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <InputCard {...props}>Content</InputCard>
    </MemoryRouter>
  );

  t.equals(comp.find('p').text(), 'no', 'Shows answer');

  t.end();
});

test('InputCard - latest collapsed', (t) => {
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
    inputOptions: {
      name: 'yesNo',
      type: 'text',
      value: 'no',
      label: 'value',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <InputCard {...props}>Content</InputCard>
    </MemoryRouter>
  );

  t.equals(
    comp
      .find('h2')
      .first()
      .text(),
    'Q',
    'Shows incomplete summary'
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
