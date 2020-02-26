import {storiesOf} from '@storybook/react';
import React from 'react';
import Loader from './Loader.tsx';
import LoaderReadme from './Loader.mdx';

const stories = storiesOf('Atoms/Loader', module);

stories.addParameters({
  docs: {
    page: LoaderReadme,
  },
});

stories.add('default', () => <Loader />);
