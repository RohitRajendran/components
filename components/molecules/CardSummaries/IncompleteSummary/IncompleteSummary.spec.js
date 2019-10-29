import {mount} from 'enzyme';
import React from 'react';
import test from 'tape';
import IncompleteSummary from './IncompleteSummary';

test('IncompleteSummary - Renders', (t) => {
  const component = mount(
    <IncompleteSummary shortTitle="This is a simpler question" />,
  );

  t.equals(
    component.find('h2').text(),
    'This is a simpler question',
    'Displays summary',
  );

  t.end();
});
