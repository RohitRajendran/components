import React from 'react';
import {storiesOf} from '@storybook/react';
import Spinner from '../../components/Spinner';

storiesOf('Atoms/Spinner', module).add('default', () => <Spinner />);
storiesOf('Atoms/Spinner', module).add('filled', () => (
  <Spinner fill="#000000" />
));
storiesOf('Atoms/Spinner', module).add('advanced', () => (
  <Spinner fill="#000000" height="60px" width="60px" />
));
