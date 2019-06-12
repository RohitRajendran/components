import {mount} from 'enzyme';
import React from 'react';
import test from 'tape';
import SimpleSummary from './SimpleSummary';

test('SimpleSummary - Renders', (t) => {
  const component = mount(
    <SimpleSummary
      shortTitle="This is a simpler question"
      answers={['This is the first answer', 'This is the second answer']}
    />
  );

  t.equals(component.find('p').length, 2, 'Displays both answers');

  t.end();
});
