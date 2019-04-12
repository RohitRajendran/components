import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import Button from '../../atoms/Button/Button';
import Confirm from './Confirm';
import ConfirmReadme from './Confirm.md';

const stories = storiesOf('Utilities/confirm', module);

stories.add(
  'default',
  withReadme(ConfirmReadme, () => (
    <Button
      variant="secondary"
      light
      onClick={() =>
        Confirm({
          name: 'Test',
          title: 'Are you sure',
          description: 'This is your last chance.',
          cancelLabel: 'Nope',
          okLabel: 'Yup',
        })
      }
    >
      Test
    </Button>
  ))
);
