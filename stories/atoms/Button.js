import React from 'react';
import {storiesOf} from '@storybook/react';
// import Loader from '../../components/Loader';

storiesOf('Atoms/Button', module).add('default', () => <button>Text</button>);

storiesOf('Atoms/Button', module).add('disabled', () => (
  <button disabled>Text</button>
));
