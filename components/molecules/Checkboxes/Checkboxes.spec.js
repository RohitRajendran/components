import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {stub} from 'sinon';
import Checkboxes from './Checkboxes';

test('Checkboxes - Should be able to render a basic question.', (t) => {
  t.plan(2);

  const component = mount(
    <Checkboxes
      name="yesNo"
      options={[
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ]}
      value="no"
      onChange={stub()}
    />
  );

  t.equals(
    component
      .find('.uic--label-value')
      .at(0)
      .text(),
    'Yes',
    'Should find the yes label.'
  );

  t.equals(
    component
      .find('.uic--label-value')
      .at(1)
      .text(),
    'No',
    'Should find the no label.'
  );
});

test('Checkboxes - Should be able to display a secondaryLabel', (t) => {
  const component = mount(
    <Checkboxes
      name="yesNo"
      options={[
        {
          label: 'Yes',
          value: 'yes',
          secondaryLabel: 'This is a secondary label!',
        },
        {
          label: 'No',
          value: 'no',
        },
      ]}
      value="no"
      onChange={stub()}
    />
  );

  t.true(component.find('.uic--label-value-secondary').length);

  t.end();
});

test('Checkboxes - Should be able to display a followup question', (t) => {
  const component = mount(
    <Checkboxes
      name="yesNo"
      options={[
        {
          label: 'Yes',
          value: 'yes',
          secondaryLabel: 'This is a secondary label!',
          followup: (
            <div className="followup-question">This is a followup question</div>
          ),
        },
        {
          label: 'No',
          value: 'no',
        },
      ]}
      value="yes"
      onChange={stub()}
    />
  );

  t.true(component.find('.followup-question').length);

  t.end();
});

test('Checkboxes - Followup question should be hidden if the parent question is not selected', (t) => {
  const component = mount(
    <Checkboxes
      name="yesNo"
      options={[
        {
          label: 'Yes',
          value: 'yes',
          secondaryLabel: 'This is a secondary label!',
          followup: (
            <div className="followup-question">This is a followup question</div>
          ),
        },
        {
          label: 'No',
          value: 'no',
        },
      ]}
      value="no"
      onChange={stub()}
    />
  );

  t.false(component.find('.followup-question').length);

  t.end();
});

test('Checkboxes - onChange should pass back the correct values.', (t) => {
  const props = {
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
    value: '',
    onChange: stub(),
  };

  const component = mount(<Checkboxes {...props} />);

  component
    .find('input')
    .at(0)
    .prop('onChange')({
    target: {
      value: 'yes',
      checked: true,
    },
    stopPropagation: stub(),
  });

  t.deepEquals(
    props.onChange.args[0],
    ['yesNo', ['', 'yes']],
    'Should add yes to the array.'
  );

  component
    .find('input')
    .at(0)
    .prop('onChange')({
    target: {
      value: 'yes',
    },
    stopPropagation: stub(),
  });

  t.deepEquals(
    props.onChange.args[1],
    ['yesNo', ['']],
    'Should remove yes from the array.'
  );

  t.end();
});
