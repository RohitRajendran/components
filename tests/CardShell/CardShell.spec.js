import React from 'react';
import test from 'tape';
import {mount} from 'enzyme';
import CardShell from '../../components/CardShell';
import Input from '../../components/Input';
import {stub} from 'sinon';
import {DateMask} from '../../stories/util';

const defaultProps = {
  onSubmit: () => true,
  name: 'test',
};

test('CardShell - active', (t) => {
  const props = {
    ...defaultProps,
    beforeButton: <p>Before</p>,
    afterButton: <p>After</p>,
  };

  const comp = mount(
    <CardShell {...props}>
      <h1>Test</h1>
    </CardShell>
  );

  t.true(
    comp
      .find('div')
      .first()
      .hasClass('active'),
    'Shows active state'
  );

  t.equals(comp.find('p').length, 2, 'Shows before and after content');
  t.equals(comp.find('Button').length, 1, 'Shows button');

  t.end();
});

test('CardShell - collapsed', (t) => {
  const props = {
    ...defaultProps,
    isCollapsed: true,
    summary: <p>Summary</p>,
  };

  const comp = mount(
    <CardShell {...props}>
      <h1>Test</h1>
    </CardShell>
  );

  t.true(
    comp
      .find('div')
      .first()
      .hasClass('collapsed'),
    'Shows collapsed state'
  );

  t.equals(comp.find('p').length, 1, 'Shows summary content');

  t.end();
});

test('CardShell - error', (t) => {
  const props = {
    ...defaultProps,
    hasError: true,
    hideButton: true,
  };

  const comp = mount(
    <CardShell {...props}>
      <h1>Test</h1>
    </CardShell>
  );

  t.true(
    comp
      .find('div')
      .first()
      .hasClass('error'),
    'Shows error state'
  );

  t.equals(comp.find('Button').length, 0, 'Hides button');

  t.end();
});

test('CardShell - validates different input constraints', (t) => {
  const badValues = {
    textValue: '',
    numericValue: 1,
    allAs: 'b',
    tooLong: 'abcd',
    dropdown: '',
    floating: 'bad',
    checkbox: false,
    multiselect: [],
    date: 'nope',
  };
  const goodValues = {
    textValue: 'abcdef',
    numericValue: 5,
    allAs: 'aaa',
    tooLong: '',
    dropdown: 'A',
    floating: 'some value',
    checkbox: true,
    multiselect: ['A'],
    date: '05/01/1980',
  };

  const numInputs = 6;

  const getInput = (values, index) => {
    const inputs = [
      // 1
      <input
        key={1}
        type="text"
        value={values.textValue}
        onChange={stub()}
        required
      />,
      // 2
      <input
        key={2}
        type="text"
        value={values.allAs}
        onChange={stub()}
        pattern="a+"
      />,
      // 3
      <input
        key={3}
        type="numeric"
        value={values.numericValue}
        onChange={stub()}
        min={4}
        max={6}
      />,
      // 4
      <input
        key={4}
        type="text"
        value={values.tooLong}
        onChange={stub()}
        maxLength={1}
      />,
      // 5
      <Input
        key={5}
        name="date"
        type="text"
        value={values.date}
        float
        onChange={stub()}
        mask={DateMask}
        label="test"
        isValid={() => values.date !== 'nope'}
      />,
      // 6
      <Input
        key={6}
        name="date"
        type="text"
        value={values.date}
        float
        onChange={stub()}
        mask={DateMask}
        label="test"
        required
      />,
    ];
    return inputs[index];
  };

  for (let i = 0; i < numInputs; i++) {
    const component = mount(
      <CardShell {...defaultProps}>{getInput(badValues, i)}</CardShell>
    );
    t.true(
      component.find('Button').props().disabled,
      `Should disable button for input ${i + 1}`
    );
  }

  for (let i = 0; i < numInputs; i++) {
    const component = mount(
      <CardShell {...defaultProps}>{getInput(goodValues, i)}</CardShell>
    );
    t.false(
      component.find('Button').props().disabled,
      `Should enable button for input ${i + 1}`
    );
  }
  t.end();
});
