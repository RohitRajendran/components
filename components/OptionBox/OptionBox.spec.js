import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import OptionBox from './OptionBox';

test('OptionBox - Should be able to render a check', (t) => {
  t.plan(2);

  const component1 = mount(<OptionBox variant="check" />);

  t.equals(
    component1.find('.option-box-check').length,
    1,
    'Should render the check box with the correct classes.'
  );

  const component2 = mount(<OptionBox variant="radio" />);

  t.equals(
    component2.find('.option-box-radio').length,
    1,
    'Should render the radio box with the correct classes.'
  );
});

test('OptionBox - Should apply the checked class when checked', (t) => {
  const component = mount(<OptionBox variant="check" checked={true} />);

  t.equals(component.find('.checked').length, 1, 'Should be checked.');

  t.end();
});

test('OptionBox - Should apply the disabled class when disabled', (t) => {
  const component = mount(<OptionBox variant="check" disabled={true} />);

  t.equals(component.find('.disabled').length, 1, 'Should be disabled.');

  t.end();
});
