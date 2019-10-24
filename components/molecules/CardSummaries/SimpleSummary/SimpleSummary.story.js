import {array, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CardShell from '../../CardShell/CardShell';
import SimpleSummary from './SimpleSummary';
import SimpleSummaryReadme from './SimpleSummary.mdx';

const stories = storiesOf('Molecules/SimpleSummary', module);

stories.addParameters({
  docs: {
    page: SimpleSummaryReadme,
  },
});

stories
  .addDecorator(withKnobs)
  .add('default', () => (
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
  ));
