import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import InterstitialScreen from './InterstitialScreen';
import {PureCarCircleIllustration} from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';

test('InterstitialScreen - renders', (t) => {
  try {
    const props = {
      Icon: PureCarCircleIllustration,
      title: 'Welcome to Your Draft Plan',
      description: <p>Hello</p>,
      actionBar: {
        buttonLabel: 'Switch to a Draft Investment Plan',
        buttonOptions: {
          to: '#',
        },
      },
    };

    const {getByText} = render(<InterstitialScreen {...props} />);

    t.true(getByText(props.title));
    t.true(getByText('Hello'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InterstitialScreen - renders with a description as a string', (t) => {
  try {
    const props = {
      Icon: PureCarCircleIllustration,
      title: 'Welcome to Your Draft Plan',
      description: 'Hello',
    };

    const {getByText} = render(<InterstitialScreen {...props} />);

    t.true(getByText(props.title));
    t.true(getByText('Hello'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
