import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {stub} from 'sinon';
import SelectButtons from './SelectButtons';

test('SelectButtons - Should be able to render a basic question.', (t) => {
  t.plan(2);

  const component = mount(
    <SelectButtons
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
      .find('.label-value')
      .at(0)
      .text(),
    'Yes',
    'Should find the yes label.'
  );

  t.equals(
    component
      .find('.label-value')
      .at(1)
      .text(),
    'No',
    'Should find the no label.'
  );
});

test('SelectButtons - Should be able to display a secondaryLabel', (t) => {
  const component = mount(
    <SelectButtons
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

  t.true(component.find('.label-value-secondary').length);

  t.end();
});

test('SelectButtons - Should be able to display a followup question', (t) => {
  const component = mount(
    <SelectButtons
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

test('SelectButtons - Followup question should be hidden if the parent question is not selected', (t) => {
  const component = mount(
    <SelectButtons
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

test('SelectButtons - onChange should pass back the correct value', (t) => {
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
    value: 'no',
    onChange: stub(),
  };

  const component = mount(<SelectButtons {...props} />);

  component
    .find('input')
    .at(0)
    .prop('onChange')({
    target: {
      value: 'yesNo',
    },
    stopPropagation: stub(),
  });

  t.equals(
    props.onChange.args[0][0],
    'yesNo',
    'Should fire the onChange handler and pass back the value of the first item'
  );

  t.end();
});
