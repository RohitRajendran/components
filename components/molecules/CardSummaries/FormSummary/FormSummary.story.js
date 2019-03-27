import {object, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import CardShell from '../../CardShell/CardShell';
import FormSummary from './FormSummary';
import FormSummaryReadme from './FormSummary.md';

const stories = storiesOf('Molecules/FormSummary', module);

stories.addDecorator(withKnobs).add(
  'default',
  withReadme(FormSummaryReadme, () => (
    <MemoryRouter>
      <CardShell
        isCollapsed={true}
        summary={
          <FormSummary
            shortTitle={text('shortTitle', 'This is a simpler question')}
            answerGroups={object('answers', [
              {
                groupName: 'Group Name',
                answers: [
                  {label: 'From', value: 'Bank of America Checking…8765'},
                  {label: 'To', value: 'United Income Brokerage…2653'},
                  {label: 'Amount', value: '$3,000.00'},
                ],
              },
            ])}
            editCard={() => true}
          />
        }
      />
    </MemoryRouter>
  ))
);

stories.addDecorator(withKnobs).add(
  'multiple categories',
  withReadme(FormSummaryReadme, () => (
    <MemoryRouter>
      <CardShell
        isCollapsed={true}
        summary={
          <FormSummary
            shortTitle={text('shortTitle', 'This is a simpler question')}
            answerGroups={object('answers', [
              {
                groupName: 'Group Name',
                answers: [
                  {label: 'From', value: 'Bank of America Checking…8765'},
                  {label: 'To', value: 'United Income Brokerage…2653'},
                  {label: 'Amount', value: '$3,000.00'},
                ],
              },
              {
                groupName: 'Group Name',
                answers: [
                  {label: 'From', value: 'Bank of America Checking…8765'},
                  {label: 'To', value: 'United Income Brokerage…2653'},
                  {label: 'Amount', value: '$3,000.00'},
                ],
              },
            ])}
            editCard={() => true}
          />
        }
      />
    </MemoryRouter>
  ))
);
