import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import {Button} from '../..';
import CompletionScreen from './CompletionScreen';

test('CompletionScreen - Renders', (t) => {
  try {
    const {container, getByText} = render(
      <CompletionScreen
        feature={
          <img
            alt="example"
            src="https://app.unitedincome.com/assets/images/pencil.svg"
          />
        }
        title="Congrats! You completed something."
        description="That's pretty cool."
        actions={
          <Button
            onClick={(() => null) as React.MouseEventHandler}
            variant="secondary"
            light
          >
            Finish
          </Button>
        }
      />,
    );

    t.equals(
      container.querySelectorAll('.uic--mcg-completion-screen').length,
      1,
      'Renders completion screen',
    );
    t.true(getByText('Congrats! You completed something.'), 'Renders title');

    t.equals(
      container.querySelectorAll('img').length,
      1,
      'Renders feature image',
    );

    t.equals(
      container.querySelectorAll('.uic--text-center').length,
      1,
      'Renders description',
    );
    t.true(getByText("That's pretty cool."), 'Renders description text');

    t.equals(
      container.querySelectorAll('button').length,
      1,
      'Renders action button',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
