import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {stub} from 'sinon';
import test from 'tape';
import SliderCard from './SliderCard';

test('SliderCard - renders', (t) => {
  const props = {
    onSubmit: () => true,
    title: 'Question',
    shortTitle: 'Q',
    sliderOptions: {
      name: 'yesNo',
      value: 1,
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(<SliderCard {...props}>Content</SliderCard>);

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
  t.equals(comp.find('Slider').length, 1, 'Displays slider');

  t.end();
});

test('SliderCard - collapsed with answer override', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    sliderOptions: {
      name: 'yesNo',
      value: 1,
    },
    onChange: stub(),
    answers: ['Yup'],
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <SliderCard {...props}>Content</SliderCard>
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

test('SliderCard - collapsed without answer override', (t) => {
  const props = {
    onSubmit: () => true,
    name: 'test',
    title: 'Question',
    description: 'Description',
    summary: <h2>Summary</h2>,
    moreDetail: <span>Test detail</span>,
    isCollapsed: true,
    shortTitle: 'Q',
    sliderOptions: {
      name: 'yesNo',
      value: 1,
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <SliderCard {...props}>Content</SliderCard>
    </MemoryRouter>
  );

  t.equals(comp.find('p').text(), '1', 'Shows answer');

  t.end();
});

test('SliderCard - latest collapsed', (t) => {
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
    sliderOptions: {
      name: 'yesNo',
      value: 1,
    },
    onChange: stub(),
    cancelChanges: () => true,
  };

  const comp = mount(
    <MemoryRouter>
      <SliderCard {...props}>Content</SliderCard>
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
