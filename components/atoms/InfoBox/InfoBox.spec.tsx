import {render, cleanup, fireEvent, getByText} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import {stub} from 'sinon';
import InfoBox from './InfoBox';

test('InfoBox - renders correctly', (t) => {
  try {
    const testProps = {
      title: 'Here is a title',
      content: 'Here is some content!',
    };

    const component = render(<InfoBox {...testProps} />);

    t.equals(
      component.container.querySelectorAll('.uic--info-box').length,
      1,
      'Should load the InfoBox component.',
    );
    t.true(
      getByText(component.container, 'Here is a title'),
      'Should correctly load InfoBox title',
    );
    t.true(
      getByText(component.container, 'Here is some content!'),
      'Should render content',
    );

    const onClickStub = stub();

    const component2 = render(
      <InfoBox
        {...{
          ...testProps,
          imageURL: 'urlLocation',
          onClick: onClickStub,
        }}
      />,
    );

    fireEvent.click(
      component2.container.querySelectorAll('.uic--info-box')[0],
      {
        stopPropagation: stub(),
      },
    );

    t.equals(onClickStub.callCount, 1, 'onClick functionality works');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InfoBox - state and hover updated correctly', (t) => {
  try {
    const testProps = {
      title: 'This is a very, very long title',
      content: 'Here is some content!',
    };

    const component = render(<InfoBox {...testProps} />);

    t.true(
      getByText(component.container, 'This is a very, very lon…'),
      'Shortened title should be displayed',
    );

    fireEvent.mouseEnter(
      component.container.querySelectorAll('.uic--info-box-title-area')[0],
      {
        stopPropagation: stub(),
      },
    );

    t.equal(
      component.container.querySelectorAll('.uic--info-box-expand').length,
      1,
      'Should apply uic--info-box-expand on hover',
    );

    t.true(
      getByText(component.container, 'This is a very, very long title'),
      'Full title should be displayed on hover',
    );

    fireEvent.mouseLeave(
      component.container.querySelectorAll('.uic--position-relative')[0],
      {
        stopPropagation: stub(),
      },
    );

    t.equal(
      component.container.querySelectorAll('.uic--info-box-expand').length,
      0,
      'uic--info-box-expand should no longer be applied',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InfoBox - isInactive', (t) => {
  try {
    const testProps = {
      title: 'This is a very, very long title',
      content: 'Here is some content!',
      isInactive: true,
    };

    const component = render(<InfoBox {...testProps} />);

    t.equal(
      component.container.querySelectorAll('.uic--info-box-inactive').length,
      1,
      'Should render the opacity to 0.4',
    );

    fireEvent.mouseEnter(
      component.container.querySelectorAll('.uic--info-box-title-area')[0],
      {
        stopPropagation: stub(),
      },
    );

    t.equal(
      component.container.querySelectorAll('.uic--info-box-inactive').length,
      1,
      'Should render the opacity to 0.4',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
