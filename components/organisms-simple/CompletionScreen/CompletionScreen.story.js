import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import LampCircleIllustration from '~components/atoms/illustrations/LampCircleIllustration/LampCircleIllustration';
import {Button} from '../..';
import CompletionScreen from './CompletionScreen';
import CompletionScreenReadme from './CompletionScreen.mdx';

const stories = storiesOf('Simple Organisms/CompletionScreen', module);

stories.addParameters({
  docs: {
    page: CompletionScreenReadme,
  },
});

stories.addDecorator(withKnobs).add('default', () => (
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
));
