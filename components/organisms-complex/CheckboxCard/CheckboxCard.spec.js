import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {stub} from 'sinon';
import test from 'tape';
import CheckboxCard from './CheckboxCard';

test('CheckboxCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    title: 'Question',
    shortTitle: 'Q',
    checkboxOptions: {
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
      value: ['no'],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<CheckboxCard {...props}>Content</CheckboxCard>);

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
  t.equals(comp.find('.label-value').length, 2, 'Displays 2 values');

  t.end();
});

test('CheckboxCard - collapsed with answer override', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    checkboxOptions: {
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
      value: ['no'],
    },
    onChange: stub(),
    answers: ['Yup'],
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <CheckboxCard {...props}>Content</CheckboxCard>
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

test('CheckboxCard - collapsed without answer override', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    checkboxOptions: {
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
      value: ['no', 'yes'],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <CheckboxCard {...props}>Content</CheckboxCard>
    </MemoryRouter>
  );

  t.equals(comp.find('p').length, 2, 'Shows both answers');

  t.end();
});

test('CheckboxCard - latest collapsed', (t) => {
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
    checkboxOptions: {
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
      value: [],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <CheckboxCard {...props}>Content</CheckboxCard>
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
