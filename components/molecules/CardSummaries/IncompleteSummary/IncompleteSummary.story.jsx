import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CardShell from '../../CardShell/CardShell';
import IncompleteSummary from './IncompleteSummary';
import IncompleteSummaryReadme from './IncompleteSummary.mdx';

const stories = storiesOf('Molecules/IncompleteSummary', module);

stories.addParameters({
  docs: {
    page: IncompleteSummaryReadme,
  },
});

stories
  .addDecorator(withKnobs)
  .add('default', () => (
    <CardShell
      isCollapsed
      hasError
      summary={
        <IncompleteSummary
          shortTitle={text('shortTitle', 'This is a simpler question')}
          editCard={() => true}
        />
      }
    />
  ));
