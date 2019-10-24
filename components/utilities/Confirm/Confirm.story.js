import {storiesOf} from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button/Button';
import Confirm from './Confirm';
import ConfirmReadme from './Confirm.mdx';

const stories = storiesOf('Utilities/Confirm', module);

stories.addParameters({
  docs: {
    page: ConfirmReadme,
  },
});

stories.add('default', () => (
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
));
