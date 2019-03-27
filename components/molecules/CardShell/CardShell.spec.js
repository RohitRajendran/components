import {mount} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import Input from '~components/atoms/Input/Input';
import DropDown from '~components/atoms/DropDown/DropDown';
import RadioButtons from '~components/molecules/RadioButtons/RadioButtons';
import Checkboxes from '~components/molecules/Checkboxes/Checkboxes';
import Slider from '~components/atoms/Slider/Slider';
import CardShell from './CardShell';

const defaultProps = {
  onSubmit: () => true,
  name: 'test',
};

test('CardShell - active', (t) => {
  const props = {
    ...defaultProps,
    onSubmit: stub(),
    onChange: stub(),
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

  comp.instance().onSubmit({preventDefault: stub()});

  t.true(props.onSubmit.calledOnce, 'Called on submit');

  comp.instance().onChange({
    preventDefault: stub(),
    target: {name: 'name', value: 'val'},
  });

  t.deepEquals(props.onChange.args[0], ['name', 'val'], 'Called on change');

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
    radioNormal: '',
    radioFollowup: '',
    selectedNormal: [],
    selectedFollowup: [],
    slider: null,
  };
  const goodValues = {
    textValue: 'abcdef',
    numericValue: 5,
    allAs: 'aaa',
    tooLong: '',
    dropdown: 'uk',
    floating: 'some value',
    checkbox: true,
    multiselect: ['A'],
    date: '05/01/1980',
    radioNormal: '2',
    radioFollowup: '3',
    selectedNormal: ['2'],
    selectedFollowup: ['3'],
    slider: 5,
  };

  const numInputs = 12;

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
        mask="Date"
        label="test"
        isValid={() => values.date !== 'nope'}
        required
      />,
      // 6
      <Input
        key={6}
        name="date"
        type="text"
        value={values.date}
        float
        onChange={stub()}
        mask="Date"
        label="test"
        required
      />,
      // 7
      <Input
        key={5}
        name="date"
        type="text"
        value={values.date}
        float
        onChange={stub()}
        label="test"
        isValid={() => values.date !== 'nope'}
        required
      />,
      // 8
      <RadioButtons
        name="bank"
        table
        options={[
          {
            label: 'Bank of America Checking …3456',
            value: '1',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Bank of America Money Market …9364',
            value: '2',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Capital One Savings …8932',
            value: '3',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Wells Fargo Checking …9867',
            value: '4',
            secondaryLabel: '$1,234,567.89',
          },
        ]}
        onChange={stub()}
        value={values.radioNormal}
        key="bank"
        required
      />,
      // 8
      <RadioButtons
        name="bank"
        table
        options={[
          {
            label: 'Bank of America Checking …3456',
            value: '1',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Bank of America Money Market …9364',
            value: '2',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Capital One Savings …8932',
            value: '3',
            secondaryLabel: '$1,234,567.89',
            followup: (
              <span>
                <Input
                  key={6}
                  name="date"
                  type="text"
                  value={values.date}
                  float
                  onChange={stub()}
                  mask="Date"
                  label="test"
                  required
                />{' '}
              </span>
            ),
          },
          {
            label: 'Wells Fargo Checking …9867',
            value: '4',
            secondaryLabel: '$1,234,567.89',
          },
        ]}
        onChange={stub()}
        value={values.radioFollowup}
        key="bank"
        required
      />,
      // 9
      <Checkboxes
        name="bank"
        table
        options={[
          {
            label: 'Bank of America Checking …3456',
            value: '1',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Bank of America Money Market …9364',
            value: '2',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Capital One Savings …8932',
            value: '3',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Wells Fargo Checking …9867',
            value: '4',
            secondaryLabel: '$1,234,567.89',
          },
        ]}
        onChange={stub()}
        value={values.selectedNormal}
        key="bank"
        required
      />,
      // 10
      <Checkboxes
        name="bank"
        table
        options={[
          {
            label: 'Bank of America Checking …3456',
            value: '1',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Bank of America Money Market …9364',
            value: '2',
            secondaryLabel: '$1,234,567.89',
          },
          {
            label: 'Capital One Savings …8932',
            value: '3',
            secondaryLabel: '$1,234,567.89',
            followup: (
              <span>
                <Input
                  key={6}
                  name="date"
                  type="text"
                  value={values.date}
                  float
                  onChange={stub()}
                  mask="Date"
                  label="test"
                  required
                />{' '}
              </span>
            ),
          },
          {
            label: 'Wells Fargo Checking …9867',
            value: '4',
            secondaryLabel: '$1,234,567.89',
          },
        ]}
        onChange={stub()}
        value={values.selectedFollowup}
        key="bank"
        required
      />,
      // 11
      <Slider
        name="slider"
        value={values.slider}
        onChange={stub()}
        key="slider"
        required
      />,
      // 12
      <DropDown
        name="dropdownExample"
        label="dropdown"
        options={[
          {
            value: 'uk',
            label: 'United Kingdom',
          },
          {
            value: 'usa',
            label: 'United States',
          },
        ]}
        value={values.dropdown}
        onChange={stub()}
        required
        key="dropdown"
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
