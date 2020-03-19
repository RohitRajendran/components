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
      component.container.querySelectorAll('aside').length,
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
    t.equals(
      component.container.querySelectorAll('footer').length,
      0,
      'Should not render a footer',
    );

    const onClickStub = stub();

    const component2 = render(
      <InfoBox
        {...{
          ...testProps,
          imageURL: 'urlLocation',
          footer: 'Here is a footer',
          onClick: onClickStub,
        }}
      />,
    );

    t.equals(
      component2.container.querySelectorAll('footer').length,
      1,
      'Should render a footer',
    );

    fireEvent.click(component2.container.querySelectorAll('aside')[0], {
      stopPropagation: stub(),
    });

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
