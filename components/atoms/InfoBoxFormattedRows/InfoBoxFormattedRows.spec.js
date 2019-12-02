import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import InfoBoxFormattedRows from './InfoBoxFormattedRows';

test('InfoBoxFormattedRows - renders correctly', (t) => {
  const testProps = {
    rowData: [
      {
        label: 'data point 1',
        value: '60%',
      },
      {
        label: 'data point 2',
        value: '40%',
      },
    ],
  };

  const component = shallow(<InfoBoxFormattedRows {...testProps} />);

  t.equal(
    component.find('.uic--info-box-formatted-row').length,
    testProps.rowData.length,
    'Should render the correct number of rows',
  );
  t.equal(
    component.find('.uic--info-box-formatted-row').get(0).key,
    component.find('.uic--row-label').get(0).props.children,
    'Key and label should be equal when no keys are passed',
  );

  const keyProps = {
    rowData: [
      {
        key: 'custom-key',
        label: 'data point 1',
        value: '60%',
      },
    ],
  };

  const component2 = shallow(<InfoBoxFormattedRows {...keyProps} />);

  t.notEqual(
    component2.find('.uic--info-box-formatted-row').get(0).key,
    component2.find('.uic--row-label').get(0).props.children,
    'Key and label should not be equal when keys are passed',
  );

  t.end();
});
