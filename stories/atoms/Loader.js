import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import Loader from '../../components/Loader';
import LoaderReadMe from '../../components/Loader/README.md';

storiesOf('Atoms/Loader', module).add(
  'default',
  withReadme(LoaderReadMe, () => <Loader />)
);
