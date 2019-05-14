import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import ExpandCollapse from './ExpandCollapse';

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
    {
      open: true,
      height: 0,
      isValid: true,
      isRequired: false,
    },
    'Should toggle the drawer open.'
  );

  t.end();
});

test('ExpandCollapse - componentDidMount', (t) => {
  const props = {
    label: 'There is a picture of a catbehind this expandy collapse menu',
    description: 'It is a very cute cat',
    disabled: false,
    defaultOpen: true,
    isInvalid: false,
  };

  const component = mount(
    <ExpandCollapse {...props}>
      Just some contnet to appear in the expandy thing
    </ExpandCollapse>
  );

  t.deepEquals(
    component.state(),
    {
      open: true,
      height: 0,
      isValid: true,
      isRequired: false,
    },
    'Should render with open as true.'
  );

  t.end();
});

test('ExpandCollapse - checkValidation', (t) => {
  const props = {
    label: 'There is a picture of a catbehind this expandy collapse menu',
    description: 'It is a very cute cat',
    disabled: false,
    defaultOpen: true,
    isInvalid: false,
  };

  const component = mount(
    <ExpandCollapse {...props}>
      <input value="" required />
    </ExpandCollapse>
  );

  component.instance().checkValidation();

  t.deepEquals(
    component.state(),
    {
      open: true,
      height: 0,
      isValid: true,
      isRequired: true,
    },
    'Should validate the items within the menu.'
  );

  t.end();
});
