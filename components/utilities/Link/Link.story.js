import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import Link from './Link';
import LinkReadMe from './Link.md';

const stories = storiesOf('Utilities/Link', module);

stories.addDecorator(withReadme(LinkReadMe));

const defaultProps = () => ({
  to: 'http://unitedincome.com',
});

stories.add(
  'default',
  () => <Link {...defaultProps()}>Visit United Income</Link>,
  {skip: true}
);
