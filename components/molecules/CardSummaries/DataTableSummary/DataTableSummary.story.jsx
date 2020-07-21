import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CardShell from '../../CardShell/CardShell';
import DataTableSummary from './DataTableSummary';
import DataTableSummaryReadme from './DataTableSummary.mdx';

const stories = storiesOf('Molecules/DataTableSummary', module);

const config = {
  columns: [
    {
      accessor: 'name',
      Header: 'Name',
    },
    {
      accessor: 'id',
      Header: 'ID',
    },
  ],
  data: [
    {
      name: 'James',
      id: 'abcd',
    },
    {
      name: 'Rohit',
      id: 'efgh',
    },
  ],
};

stories.addParameters({
  docs: {
    page: DataTableSummaryReadme,
  },
});

stories
  .addDecorator(withKnobs)
  .add('default', () => (
    <CardShell
      isCollapsed
      summary={
        <DataTableSummary
          shortTitle={text('shortTitle', 'A table of cool people')}
          dataTableConfig={config}
          editCard={() => true}
        />
      }
    />
  ));
