import {mount} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import RadioButtons from './RadioButtons';

test('RadioButtons - Should be able to render a basic question.', (t) => {
  t.plan(2);

  const component = mount(
    <RadioButtons
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
    />,
  );

  t.equals(
    component.find('.uic--label-value').at(0).text(),
    'Yes',
    'Should find the yes label.',
  );

  t.equals(
    component.find('.uic--label-value').at(1).text(),
    'No',
    'Should find the no label.',
  );
});

test('RadioButtons - Should be able to render a basic question (with boolean values).', (t) => {
  t.plan(2);

  const component = mount(
    <RadioButtons
      name="yesNo"
      options={[
        {
          label: 'Yes',
          value: true,
        },
        {
          label: 'No',
          value: false,
        },
      ]}
      value={true}
      onChange={stub()}
    />,
  );

  t.equals(
    component.find('.uic--label-value').at(0).text(),
    'Yes',
    'Should find the yes label.',
  );

  t.equals(
    component.find('.uic--label-value').at(1).text(),
    'No',
    'Should find the no label.',
  );
});

test('RadioButtons - Should be able to render a basic question (with boolean values and no onChange).', (t) => {
  try {
    mount(
      <RadioButtons
        name="yesNo"
        options={[
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ]}
        value={true}
      />,
    );

    t.fail('Should have thrown error');
  } catch (err) {
    if (err.message === 'Boolean values require an onChange handler') {
      t.pass('Should have thrown error since no on change handler');
    } else {
      t.fail(err.message);
    }
  } finally {
    t.end();
  }
});

test('RadioButtons - Should be able to display a secondaryLabel', (t) => {
  const component = mount(
    <RadioButtons
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
    />,
  );

  t.true(component.find('.uic--label-value-secondary').length);

  t.end();
});

test('RadioButtons - Should be able to display a followup question', (t) => {
  const component = mount(
    <RadioButtons
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
    />,
  );

  t.true(component.find('.followup-question').length);

  t.end();
});

test('RadioButtons - Followup question should be hidden if the parent question is not selected', (t) => {
  const component = mount(
    <RadioButtons
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
    />,
  );

  t.false(component.find('.followup-question').length);

  t.end();
});

test('RadioButtons - onChange should pass back the correct value', (t) => {
  t.plan(2);

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

  const component = mount(<RadioButtons {...props} />);

  component.find('input').at(0).prop('onChange')();

  t.equals(
    props.onChange.args[0][0],
    'yesNo',
    'Should fire the onChange handler and pass back the value of the first item',
  );

  t.equals(
    props.onChange.args[0][1],
    'yes',
    'Should fire the onChange handler and pass back the value of the first item',
  );
});
