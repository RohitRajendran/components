import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import DataTable from './DataTable';

test('DataTable - render', (t) => {
  const props = {
    columns: [
      {
        accessor: 'name',
        Header: 'Name',
      },
    ],
    data: [
      {
        name: 'Bob',
      },
      {
        name: 'Rob',
      },
    ],
    sortable: false,
  };

  const comp = shallow(<DataTable {...props} />);

  t.deepEqual(
    comp.find('ReactTable').prop('data'),
    [{name: 'Bob'}, {name: 'Rob'}],
    'Pass data prop to inner component',
  );

  t.equal(
    comp.find('ReactTable').prop('sortable'),
    false,
    'Pass additional prop to inner component',
  );

  const expander = comp.find('ReactTable').prop('ExpanderComponent')({
    isExpanded: true,
  });

  t.equal(
    expander.props.direction,
    'down',
    'Expander pointing down when expanded',
  );

  t.end();
});
