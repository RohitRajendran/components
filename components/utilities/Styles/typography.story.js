import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import TypographyReadme from './typography.md';

const stories = storiesOf('Utilities/Styles', module);

const TextStyles = () => (
  <Fragment>
    <h1>McGonagall Text Styles</h1>
    <h2 className="uic--mcg-question-text">uic--mcg-question-text</h2>
    <h2 className="uic--mcg-description-text">uic--mcg-description-text</h2>
    <h2 className="uic--mcg-subhead-text">uic--mcg-subhead-text</h2>
    <h2 className="uic--mcg-subhead-2-text">uic--mcg-subhead-2-text</h2>
  </Fragment>
);

stories.addDecorator(withReadme(TypographyReadme));

stories.add('typography', () => <TextStyles />);
