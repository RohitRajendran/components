import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../../components/Button';

storiesOf('Atoms/Button', module).add('default', () => (
  <Button>Testing</Button>
));

storiesOf('Atoms/Button', module).add('disabled', () => (
  <Button disabled>Testing</Button>
));
