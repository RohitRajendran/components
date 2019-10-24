import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import detectBrowser from './DetectBrowser';
import DetectBrowserReadme from './DetectBrowser.mdx';

const stories = storiesOf('Utilities/DetectBrowser', module);

stories.addParameters({
  docs: {
    page: DetectBrowserReadme,
  },
});

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

stories.add('default', () => <WrappedTestComponent />);
