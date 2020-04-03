import {mount} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import InputCard from './InputCard';

test('InputCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    title: 'Question',
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      type: 'text',
      label: 'value',
      value: '',
    },
    isLatestCard: true,
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

  t.equals(comp.find('h2').first().text(), 'Question', 'Shows title');

  t.equals(comp.find('p').length, 0, 'Should not show a description');
  t.false(
    comp.find('CardShell').first().prop('hasError'),
    'Should not show error state',
  );

  t.true(
    comp.find('.uic--card-submit').first().prop('disabled'),
    'Continue should be disabled since no value',
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
      type: 'text',
      value: 'no',
      label: 'value',
    },
    onChange: stub(),
    answers: ['Yup'],
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

  t.equals(comp.find('p').first().text(), 'Yup', 'Shows answer');
  t.false(
    comp.find('CardShell').first().prop('hasError'),
    'Should not show error state',
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
      type: 'text',
      value: 'no',
      label: 'value',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

  t.equals(comp.find('p').text(), 'no', 'Shows answer');

  t.end();
});

test('InputCard - collapsed with currency answer', (t) => {
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
      type: 'text',
      value: '123',
      label: 'value',
      mask: 'Currency',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

  t.equals(comp.find('p').text(), '$123', 'Shows answer with $ prepended');

  t.end();
});

test('InputCard - collapsed with percentage answer', (t) => {
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
      type: 'text',
      value: '50',
      label: 'value',
      mask: 'PercentageWithDecimal',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

  t.equals(comp.find('p').text(), '50%', 'Shows answer with % appended');

  t.end();
});

test('InputCard - latest collapsed', (t) => {
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
      type: 'text',
      value: 'no',
      label: 'value',
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<InputCard {...props}>Content</InputCard>);

  t.equals(comp.find('h2').first().text(), 'Q', 'Shows incomplete summary');
  t.true(
    comp.find('CardShell').first().prop('hasError'),
    'Should show error state',
  );

  t.end();
});
