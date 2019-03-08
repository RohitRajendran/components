import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import Loader from '../../components/Loader';
import LoaderReadme from '../../components/Loader/README.md';

storiesOf('Atoms/Loader', module).add(
  'default',
  withReadme(LoaderReadme, () => <Loader />)
);
