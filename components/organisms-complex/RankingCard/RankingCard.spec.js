import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {stub} from 'sinon';
import test from 'tape';
import RankingCard from './RankingCard';

test('RankingCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    title: 'Question',
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      items: [
        {
          label: 'Montezuma',
          secondaryLabel: '$8,345',
          value: 'montezuma',
          movable: false,
        },
        {
          label: 'Pica',
          secondaryLabel: '$1,000',
          value: 'pica',
          movable: true,
          focus: true,
        },
        {
          label: 'Pixie',
          secondaryLabel: '$13,000',
          value: 'pixie',
          movable: false,
        },
      ],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<RankingCard {...props}>Content</RankingCard>);

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
  t.equals(comp.find('Ranking').length, 1, 'Displays ranking component');

  t.end();
});

test('RankingCard - collapsed with focus answer', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      items: [
        {
          label: 'Montezuma',
          secondaryLabel: '$8,345',
          value: 'montezuma',
          movable: false,
        },
        {
          label: 'Pica',
          secondaryLabel: '$1,000',
          value: 'pica',
          movable: true,
          focus: true,
        },
        {
          label: 'Pixie',
          secondaryLabel: '$13,000',
          value: 'pixie',
          movable: false,
        },
      ],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <RankingCard {...props}>Content</RankingCard>
    </MemoryRouter>
  );

  t.equals(
    comp
      .find('p')
      .first()
      .text(),
    '2',
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

test('RankingCard - collapsed without focus answer', (t) => {
  t.plan(3);
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    config: {
      name: 'yesNo',
      items: [
        {
          label: 'Montezuma',
          secondaryLabel: '$8,345',
          value: 'montezuma',
          movable: false,
        },
        {
          label: 'Pica',
          secondaryLabel: '$1,000',
          value: 'pica',
          movable: true,
        },
        {
          label: 'Pixie',
          secondaryLabel: '$13,000',
          value: 'pixie',
          movable: false,
        },
      ],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <RankingCard {...props}>Content</RankingCard>
    </MemoryRouter>
  );

  t.equals(
    comp
      .find('p')
      .at(0)
      .text(),
    '1. Montezuma',
    'Shows answer'
  );
  t.equals(
    comp
      .find('p')
      .at(1)
      .text(),
    '2. Pica',
    'Shows answer'
  );
  t.equals(
    comp
      .find('p')
      .at(2)
      .text(),
    '3. Pixie',
    'Shows answer'
  );
});

test('RankingCard - latest collapsed', (t) => {
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
    config: {
      name: 'yesNo',
      items: [
        {
          label: 'Montezuma',
          secondaryLabel: '$8,345',
          value: 'montezuma',
          movable: false,
        },
        {
          label: 'Pica',
          secondaryLabel: '$1,000',
          value: 'pica',
          movable: true,
          focus: true,
        },
        {
          label: 'Pixie',
          secondaryLabel: '$13,000',
          value: 'pixie',
          movable: false,
        },
      ],
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <RankingCard {...props}>Content</RankingCard>
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
