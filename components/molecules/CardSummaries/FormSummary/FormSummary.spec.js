import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import test from 'tape';
import FormSummary from './FormSummary';

test('FormSummary - Renders one answer', (t) => {
  const comp = mount(
    <MemoryRouter>
      <FormSummary
        shortTitle="This is a simpler question"
        answerGroups={[
          {
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
        ]}
        editCard={() => true}
      />
    </MemoryRouter>
  );

  t.equals(
    comp.find('h2').text(),
    'This is a simpler question',
    'Displays summary'
  );
  t.equals(
    comp.find('.uic--striped').length,
    0,
    'Should not add striped class'
  );
  t.equals(comp.find('h3').length, 0, 'Should not show group name');
  t.equals(
    comp.find('.uic--card-summary-answer').length,
    3,
    'Should show 3 answers'
  );

  t.end();
});

test('FormSummary - Renders one answer', (t) => {
  const comp = mount(
    <MemoryRouter>
      <FormSummary
        shortTitle="This is a simpler question"
        answerGroups={[
          {
            groupName: 'group',
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
          {
            groupName: 'group1',
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
        ]}
        editCard={() => true}
      />
    </MemoryRouter>
  );

  t.equals(
    comp.find('h2').text(),
    'This is a simpler question',
    'Displays summary'
  );
  t.equals(
    comp.find('.uic--card-summary-group').length,
    2,
    'Should show one summary group'
  );
  t.equals(comp.find('.uic--striped').length, 2, 'Should have striped class');
  t.equals(comp.find('h3').length, 2, 'Should show group names');
  t.equals(
    comp.find('.uic--card-summary-answer').length,
    6,
    'Should show 3 answers'
  );

  t.end();
});
