import {render, fireEvent, cleanup} from '@testing-library/react';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import ActionBar from './ActionBar';

test('ActionBar - renders', (t) => {
  try {
    const props = {
      title: 'Montezuma',
    };

    const {getByText} = render(<ActionBar {...props} />);

    t.true(getByText('Montezuma'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('ActionBar - able to click each handler', (t) => {
  try {
    const props = {
      onBack: stub(),
      onClose: stub(),
    };

    const {getByLabelText} = render(<ActionBar {...props} />);

    fireEvent.click(getByLabelText('back'));
    fireEvent.click(getByLabelText('close'));

    t.equals(props.onBack.callCount, 1, 'Should call the back handler once.');
    t.equals(props.onClose.callCount, 1, 'Should call the close handler once');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
