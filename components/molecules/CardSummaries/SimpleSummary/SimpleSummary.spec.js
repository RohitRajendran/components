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

  t.equals(component.find('Button').text(), 'Edit', 'Edit button is displayed');

  t.end();
});

test('SimpleSummary - Renders with customized link', (t) => {
  const editCardText = 'Go back, sucka';
  const component = mount(
    <SimpleSummary
      shortTitle="This is a simpler question"
      answers={['This is the first answer', 'This is the second answer']}
      editCardText={editCardText}
    />
  );

  t.equals(
    component.find('Button').text(),
    editCardText,
    'Modified edit text is displayed'
  );

  t.end();
});
