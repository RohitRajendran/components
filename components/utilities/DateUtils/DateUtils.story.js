import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import {
  isAfterMonth,
  isBeforeMonth,
  isSameOrAfterMonth,
  isSameOrBeforeMonth,
} from './DateUtils';
import DateUtilsReadMe from './DateUtils.mdx';

const stories = storiesOf('Utilities/DateUtils', module);

stories.addParameters({
  docs: {
    page: DateUtilsReadMe,
  },
});

const IsBeforeMonth = () => (
  <Fragment>
    <h1>isBeforeMonth</h1>
    <p>Provided: 02/2020: {String(isBeforeMonth('02/2020'))}</p>
  </Fragment>
);

const IsSameOrBeforeMonth = () => (
  <Fragment>
    <h1>isSameOrBeforeMonth</h1>
    <p>Provided: 02/2020: {String(isSameOrBeforeMonth('02/2020'))}</p>
  </Fragment>
);

const IsSameOrAfterMonth = () => (
  <Fragment>
    <h1>isSameOrAfterMonth</h1>
    <p>Provided: 02/2020: {String(isSameOrAfterMonth('12/1990'))}</p>
  </Fragment>
);

const IsAfterMonth = () => (
  <Fragment>
    <h1>isAfterMonth</h1>
    <p>Provided: 02/2020: {String(isAfterMonth('02/2020'))}</p>
  </Fragment>
);

stories.add('isBeforeMonth', () => <IsBeforeMonth />);
stories.add('isSameOrBeforeMonth', () => <IsSameOrBeforeMonth />);
stories.add('isSameOrAfterMonth', () => <IsSameOrAfterMonth />);
stories.add('isAfterMonth', () => <IsAfterMonth />);
