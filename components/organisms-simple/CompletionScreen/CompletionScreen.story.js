import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import {Button} from '../..';
import LampCircleIllustration from '~components/atoms/illustrations/LampCircleIllustration/LampCircleIllustration';
import CompletionScreen from './CompletionScreen';
import CompletionScreenReadme from './CompletionScreen.md';

const stories = storiesOf('Simple Organisms/CompletionScreen', module);

stories.addDecorator(withKnobs).add(
  'default',
  withReadme(CompletionScreenReadme, () => (
    <MemoryRouter>
      <CompletionScreen
        title={text('title', 'Congrats! You completed something.')}
        description={text(
          'description',
          'This is where the optional description goes.'
        )}
        actions={
          <Button type="submit" variant="secondary" light>
            Finish
          </Button>
        }
        feature={<LampCircleIllustration />}
      />
    </MemoryRouter>
  ))
);
