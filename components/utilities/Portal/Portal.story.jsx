import React from 'react';
import {storiesOf} from '@storybook/react';
import Portal from './Portal.tsx';
import PortalReadMe from './Portal.mdx';

const stories = storiesOf('Utilities/Portal', module);

stories.addParameters({
  docs: {
    page: PortalReadMe,
  },
});

stories.add(
  'default',
  () => (
    <Portal>
      <div>
        <h1>Portals children get appended to the document body!</h1>
      </div>
      <div>
        <iframe
          title="alive"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y6ljFaKRTrI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Portal>
  ),
  {percy: {skip: true}},
);
