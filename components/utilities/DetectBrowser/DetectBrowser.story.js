import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import detectBrowser from './DetectBrowser';
import {withReadme} from 'storybook-readme';
import DetectBrowserReadme from './DetectBrowser.md';

const stories = storiesOf('Utilities/detectBrowser', module);

const TestComponent = (props) => (
  <Fragment>
    <h1>Are you using Internet Explorer? {props.isIe ? 'Yes!' : 'No!'}</h1>
    <h1>Are you using iOS? {props.isIos ? 'Yes!' : 'No!'}</h1>
    <h1>Are you on mobile? {props.isMobile ? 'Yes!' : 'No!'}</h1>
    <h1>Are you on a tablet? {props.isTablet ? 'Yes!' : 'No!'}</h1>
  </Fragment>
);

TestComponent.propTypes = {
  isIe: PropTypes.bool,
  isIos: PropTypes.bool,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
};

const WrappedTestComponent = detectBrowser(TestComponent);

stories.add(
  'default',
  withReadme(DetectBrowserReadme, () => <WrappedTestComponent />)
);
