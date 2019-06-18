import {array, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import CardShell from '../../CardShell/CardShell';
import SimpleSummary from './SimpleSummary';
import SimpleSummaryReadme from './SimpleSummary.md';

const stories = storiesOf('Molecules/SimpleSummary', module);

stories
  .addDecorator(withKnobs)
  .add(
    'default',
    withReadme(SimpleSummaryReadme, () => (
      <CardShell
        isCollapsed={true}
        summary={
          <SimpleSummary
            shortTitle={text('shortTitle', 'This is a simpler question')}
            answers={array('answers', [
              'This is the first answer',
              'This is the second answer',
            ])}
            editCard={() => true}
          />
        }
      />
    ))
  );
