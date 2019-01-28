import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../../components/Button';

storiesOf('Atoms/Button', module).add('primary light', () => (
  <Button type="primary" light>
    Testing
  </Button>
));

storiesOf('Atoms/Button', module).add('primary dark', () => (
  <Button type="primary" dark>
    Testing
  </Button>
));

storiesOf('Atoms/Button', module).add('secondary light', () => (
  <Button type="secondary" light>
    Testing
  </Button>
));

storiesOf('Atoms/Button', module).add('secondary dark', () => (
  <Button type="secondary" dark>
    Testing
  </Button>
));

storiesOf('Atoms/Button', module).add('tertiary light', () => (
  <Button type="tertiary" light>
    Testing
  </Button>
));

storiesOf('Atoms/Button', module).add('tertiary dark', () => (
  <Button type="tertiary" dark>
    Testing
  </Button>
));

storiesOf('Atoms/Button', module).add('disabled', () => (
  <Button disabled>Testing</Button>
));
