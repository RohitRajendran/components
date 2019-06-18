import {mount} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import RadioButtonCard from './RadioButtonCard';

test('RadioButtonCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
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
    cancelChanges: () => true,
  };

  const comp = mount(<RadioButtonCard {...props}>Content</RadioButtonCard>);

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
  t.equals(comp.find('.uic--label-value').length, 2, 'Displays 2 values');

  t.end();
});

test('RadioButtonCard - collapsed with answer override', (t) => {
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
    answers: ['Yup'],
    cancelChanges: () => true,
  };

  const comp = mount(<RadioButtonCard {...props}>Content</RadioButtonCard>);

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

test('RadioButtonCard - collapsed with answer override', (t) => {
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
    cancelChanges: () => true,
  };

  const comp = mount(<RadioButtonCard {...props}>Content</RadioButtonCard>);

  t.equals(
    comp
      .find('p')
      .first()
      .text(),
    'No',
    'Shows answer'
  );

  t.end();
});

test('RadioButtonCard - latest collapsed', (t) => {
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
    cancelChanges: () => true,
  };

  const comp = mount(<RadioButtonCard {...props}>Content</RadioButtonCard>);

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
