import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import Loader from './Loader';
import LoaderReadme from './Loader.md';

const stories = storiesOf('Atoms/Loader', module);

stories.addDecorator(withReadme(LoaderReadme));

stories.add('default', () => <Loader />);
