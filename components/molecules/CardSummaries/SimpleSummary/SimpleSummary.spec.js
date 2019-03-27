import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import test from 'tape';
import SimpleSummary from './SimpleSummary';

test('SimpleSummary - Renders', (t) => {
  const component = mount(
    <MemoryRouter>
      <SimpleSummary
        shortTitle="This is a simpler question"
        answers={['This is the first answer', 'This is the second answer']}
      />
    </MemoryRouter>
  );

  t.equals(component.find('p').length, 2, 'Displays both answers');

  t.end();
});
