import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import ExpandCollapse from './ExpandCollapse';
import RadioButtons from '~components/molecules/RadioButtons/RadioButtons';

test('ExpandCollapse - openExpandItem', (t) => {
  const props = {
    label: 'There is a picture of a catbehind this expandy collapse menu',
    description: 'It is a very cute cat',
    disabled: false,
  };

  const component = mount(
    <ExpandCollapse {...props}>
      Just some contnet to appear in the expandy thing
    </ExpandCollapse>
  );

  component.instance().openExpandItem();

  t.deepEquals(
    component.state(),
    {open: true, valid: true, height: 0},
    'Should toggle the drawer open.'
  );

  t.end();
});

test('ExpandCollapse - validate', (t) => {
  const props = {
    label: 'There is a picture of a catbehind this expandy collapse menu',
    description: 'It is a very cute cat',
    disabled: false,
  };

  const component = mount(
    <ExpandCollapse {...props}>
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
          {
            label: "I don't know",
            value: 'idk',
            disabled: true,
          },
        ]}
        value=""
        key="yesNo"
        required
      />
    </ExpandCollapse>
  );

  component.instance().checkValidation();

  t.deepEquals(
    component.state(),
    {open: false, valid: false, height: 0},
    'Should be invalid.'
  );

  t.end();
});
