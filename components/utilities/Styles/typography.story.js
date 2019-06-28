import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import TypographyReadme from './typography.md';

const stories = storiesOf('Utilities/Styles', module);

const TextStyles = () => (
  <Fragment>
    <h2>Base Styles</h2>
    <div className="uic--header-1-text">uic--header-1-text</div>
    <div className="uic--header-1-5-text">uic--header-1-5-text</div>
    <div className="uic--header-2-text">uic--header-2-text</div>
    <div className="uic--header-3-text">uic--header-3-text</div>
    <div className="uic--body-text">uic--body-text</div>
    <div className="uic--stand-alone-cta-text">uic--stand-alone-cta-text</div>
    <hr />
    <h2>Library Styles</h2>
    <div className="uic--library-blog-header-3a">
      uic--library-blog-header-3a
    </div>
    <div className="uic--library-blog-header-3b">
      uic--library-blog-header-3b
    </div>
    <div className="uic--library-pull-quote">uic--library-pull-quote</div>
    <hr />
    <h2>McGonagall Text Styles</h2>
    <div className="uic--mcg-question-text">uic--mcg-question-text</div>
    <div className="uic--mcg-description-text">uic--mcg-description-text</div>
    <div className="uic--mcg-subhead-text">uic--mcg-subhead-text</div>
    <div className="uic--mcg-subhead-2-text">uic--mcg-subhead-2-text</div>
  </Fragment>
);

stories.addDecorator(withReadme(TypographyReadme));

stories.add('typography', () => <TextStyles />);
