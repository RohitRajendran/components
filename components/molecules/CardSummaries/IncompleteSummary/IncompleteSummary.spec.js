import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import test from 'tape';
import IncompleteSummary from './IncompleteSummary';

test('IncompleteSummary - Renders', (t) => {
  const component = mount(
    <MemoryRouter>
      <IncompleteSummary shortTitle="This is a simpler question" cardUrl="/" />
    </MemoryRouter>
  );

  t.equals(
    component.find('h2').text(),
    'This is a simpler question',
    'Displays summary'
  );

  t.end();
});
