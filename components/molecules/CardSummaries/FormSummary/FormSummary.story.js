import {object, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CardShell from '../../CardShell/CardShell';
import FormSummary from './FormSummary';
import FormSummaryReadme from './FormSummary.mdx';

const stories = storiesOf('Molecules/FormSummary', module);

stories.addParameters({
  docs: {
    page: FormSummaryReadme,
  },
});

stories.addDecorator(withKnobs).add('default', () => (
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
));

stories.addDecorator(withKnobs).add('multiple categories', () => (
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
));
