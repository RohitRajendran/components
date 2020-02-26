import {StateDecorator, Store} from '@sambego/storybook-state';
import {object} from '@storybook/addon-knobs';
import {storiesOf, forceReRender} from '@storybook/react';
import React, {Fragment} from 'react';
import InfoBox from '../InfoBox/InfoBox.tsx';
import InfoBoxFormattedRows from './InfoBoxFormattedRows.tsx';
import InfoBoxFormattedRowsReadMe from './InfoBoxFormattedRows.mdx';

const stories = storiesOf('Atoms/InfoBoxFormattedRows', module);

stories.addParameters({
  docs: {
    page: InfoBoxFormattedRowsReadMe,
  },
});

const store = new Store({
  default: '',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({formName, rowData}) => ({
  name: formName,
  rowData: object('rowData', rowData),
});

stories.add('default', () => (
  <InfoBox
    title="Giannis - 401k"
    imageURL="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/greek_freak_j2qb.svg"
    content={
      <InfoBoxFormattedRows
        {...defaultProps({
          formName: 'default',
          rowData: [
            {
              label: 'Stocks',
              value: '95%',
            },
            {
              label: 'Bonds',
              value: '3%',
            },
            {
              label: 'REITs, Cash, Etc.',
              value: '2%',
            },
          ],
        })}
      />
    }
    footer={
      <Fragment>
        <div className="uic--info-box-formatted-row">
          <div className="uic--row-label">Equity Allocation Override</div>
          <div className="uic--mcg-subhead-text">95%</div>
        </div>
        <div className="uic--field-description-text">
          High Investment Risk and Return Potential
        </div>
      </Fragment>
    }
  />
));
