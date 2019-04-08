import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import test from 'tape';
import CompletionScreen from './CompletionScreen';
import {Button} from '../..';

test('CompletionScreen - Renders', (t) => {
  const comp = mount(
    <MemoryRouter>
      <CompletionScreen
        feature={<h1>Feature image or spending need card should go here</h1>}
        title="Congrats! You completed something."
        description="That's pretty cool."
        actions={
          <Button type="submit" variant="secondary" light>
            Finish
          </Button>
        }
      />
    </MemoryRouter>
  );

  t.equals(
    comp.find('h2').text(),
    'Congrats! You completed something.',
    'Renders screen'
  );

  t.end();
});
