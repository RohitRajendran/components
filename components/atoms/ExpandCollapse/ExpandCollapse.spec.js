import {mount} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import * as DetectBrowser from '~components/utilities/DetectBrowser/DetectBrowser';
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
  component.update();
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

test('ExpandCollapse - render as uncollapsible', (t) => {
  const isWindowDefinedStub = stub(DetectBrowser, 'isWindowDefined').returns(
    true
  );
  const props = {
    label: 'There is a picture of a catbehind this expandy collapse menu',
    description: 'It is a very cute cat',
    disabled: false,
    collapsible: false,
  };

  const component = mount(
    <ExpandCollapse {...props}>
      <p>Just some contnet to appear in the expandy thing</p>
    </ExpandCollapse>
  );

  t.equals(
    component.find('.uic--ec-controls').length,
    0,
    'Hides collapse icon'
  );
  t.equals(component.find('p').length, 1, 'Should drawer content');

  isWindowDefinedStub.restore();

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

test('ExpandCollapse - componentDidUpdate', (t) => {
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

  component.setState({height: 100});

  t.deepEquals(
    component.state(),
    {
      open: true,
      height: 0,
      isValid: true,
      isRequired: false,
    },
    'Should update state with height from node'
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

test('ExpandCollapse - componentWillUnmount', (t) => {
  const isWindowDefinedStub = stub(DetectBrowser, 'isWindowDefined').returns(
    true
  );
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

  component.instance().componentWillUnmount();

  t.pass();

  isWindowDefinedStub.restore();

  t.end();
});

test('ExpandCollapse - handleResize', (t) => {
  const isWindowDefinedStub = stub(DetectBrowser, 'isWindowDefined').returns(
    true
  );
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

  component.instance().handleResize();

  t.pass();

  isWindowDefinedStub.restore();

  t.end();
});
