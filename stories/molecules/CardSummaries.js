import {array, object, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import {
  CardShell,
  FormSummary,
  IncompleteSummary,
  SimpleSummary,
} from '../../components';
import FormSummaryReadme from '../../components/CardSummaries/FormSummary/FormSummary.md';
import IncompleteSummaryReadme from '../../components/CardSummaries/IncompleteSummary/IncompleteSummary.md';
import SimpleSummaryReadme from '../../components/CardSummaries/SimpleSummary/SimpleSummary.md';

const stories = storiesOf('Molecules/CardSummaries', module);

stories.addDecorator(withKnobs).add(
  'Simple Summary',
  withReadme(SimpleSummaryReadme, () => (
    <MemoryRouter>
      <CardShell
        isCollapsed={true}
        summary={
          <SimpleSummary
            shortTitle={text('shortTitle', 'This is a simpler question')}
            answers={array('answers', [
              'This is the first answer',
              'This is the second answer',
            ])}
            cardUrl={'/'}
          />
        }
      />
    </MemoryRouter>
  ))
);

stories.addDecorator(withKnobs).add(
  'Incomplete Summary',
  withReadme(IncompleteSummaryReadme, () => (
    <MemoryRouter>
      <CardShell
        isCollapsed={true}
        hasError={true}
        summary={
          <IncompleteSummary
            shortTitle={text('shortTitle', 'This is a simpler question')}
            cardUrl={'/'}
          />
        }
      />
    </MemoryRouter>
  ))
);

stories.addDecorator(withKnobs).add(
  'Form Summary',
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
            cardUrl={'/'}
          />
        }
      />
    </MemoryRouter>
  ))
);

stories.addDecorator(withKnobs).add(
  'Form Summary with Multiple Categories',
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
            cardUrl={'/'}
          />
        }
      />
    </MemoryRouter>
  ))
);
