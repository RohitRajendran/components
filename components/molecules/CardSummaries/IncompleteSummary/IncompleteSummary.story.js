import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import CardShell from '../../CardShell/CardShell';
import IncompleteSummary from './IncompleteSummary';
import IncompleteSummaryReadme from './IncompleteSummary.md';

const stories = storiesOf('Molecules/IncompleteSummary', module);

stories.addDecorator(withKnobs).add(
  'default',
  withReadme(IncompleteSummaryReadme, () => (
    <MemoryRouter>
      <CardShell
        isCollapsed={true}
        hasError={true}
        summary={
          <IncompleteSummary
            shortTitle={text('shortTitle', 'This is a simpler question')}
            editCard={() => true}
          />
        }
      />
    </MemoryRouter>
  ))
);
