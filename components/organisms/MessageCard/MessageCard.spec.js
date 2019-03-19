import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import test from 'tape';
import MessageCard from './MessageCard';

test('MessageCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Title',
    shortTitle: 'Q',
    cardUrl: '/',
  };

  const comp = mount(<MessageCard {...props}>Content</MessageCard>);

  t.equals(
    comp
      .find('h2')
      .first()
      .text(),
    'Title',
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

test('MessageCard - shows description and feature image', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Title',
    description: 'Description',
    shortTitle: 'Q',
    cardUrl: '/',
    featureImage: (
      <img
        alt="example"
        src="https://app.unitedincome.com/assets/images/pencil.svg"
      />
    ),
  };

  const comp = mount(<MessageCard {...props}>Content</MessageCard>);

  t.equals(comp.find('p').length, 1, 'Should show a description');
  t.equals(comp.find('img').length, 1, 'Should feature image');

  t.end();
});

test('MessageCard - collapsed', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Title',
    shortTitle: 'Q',
    cardUrl: '/',
    description: 'Description',
    isCollapsed: true,
  };

  const comp = mount(<MessageCard {...props}>Content</MessageCard>);

  t.equals(
    comp
      .find('h2')
      .first()
      .text(),
    'Title',
    'Shows collapsed state'
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

test('MessageCard - latest collapsed', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Title',
    shortTitle: 'Q',
    cardUrl: '/',
    description: 'Description',
    isCollapsed: true,
    isLatestCard: true,
  };

  const comp = mount(
    <MemoryRouter>
      <MessageCard {...props}>Content</MessageCard>
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
