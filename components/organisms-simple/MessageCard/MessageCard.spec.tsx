import {render, cleanup, getByText} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import {stub} from 'sinon';
import MessageCard from './MessageCard';

test('MessageCard - renders', (t) => {
  try {
    window.requestAnimationFrame = stub();

    const props = {
      onSubmit: (): Promise<void> => Promise.resolve(),
      name: 'test',
      title: 'Title',
      shortTitle: 'Q',
    };

    const {container} = render(
      <MessageCard
        editCard={(() => null) as React.MouseEventHandler}
        {...props}
      >
        Content
      </MessageCard>,
    );

    t.true(getByText(container, 'Title'), 'Shows title');

    t.equals(
      container.querySelectorAll('p').length,
      0,
      'Should not show a description',
    );

    t.true(
      container.querySelectorAll('.uic--active').length > 0,
      'Should be active',
    );
    t.equals(
      container.querySelectorAll('.uic--card-error').length,
      0,
      'Should not show error state',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('MessageCard - shows description and feature image', (t) => {
  try {
    const props = {
      onSubmit: (): Promise<void> => Promise.resolve(),
      name: 'test',
      title: 'Title 2',
      description: 'Description',
      shortTitle: 'Q',
      featureImage: (
        <img
          alt="example"
          src="https://app.unitedincome.com/assets/images/pencil.svg"
        />
      ),
    };

    const {container} = render(
      <MessageCard
        editCard={(() => null) as React.MouseEventHandler}
        {...props}
      >
        Content
      </MessageCard>,
    );

    t.true(getByText(container, 'Title 2'), 'Shows title');
    t.equals(
      container.querySelectorAll('p').length,
      1,
      'Should show a description',
    );
    t.equals(
      container.querySelectorAll('img').length,
      1,
      'Should feature image',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('MessageCard - shows description node and feature image', (t) => {
  try {
    const props = {
      onSubmit: (): Promise<void> => Promise.resolve(),
      name: 'test',
      title: 'Title',
      description: <p>Description</p>,
      shortTitle: 'Q',
      featureImage: (
        <img
          alt="example"
          src="https://app.unitedincome.com/assets/images/pencil.svg"
        />
      ),
    };

    const {container} = render(
      <MessageCard
        editCard={(() => null) as React.MouseEventHandler}
        {...props}
      >
        Content
      </MessageCard>,
    );

    t.equals(
      container.querySelectorAll('p').length,
      1,
      'Should show a description',
    );
    t.equals(
      container.querySelectorAll('img').length,
      1,
      'Should feature image',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('MessageCard - collapsed', (t) => {
  try {
    const props = {
      onSubmit: (): Promise<void> => Promise.resolve(),
      name: 'test',
      title: 'Title',
      shortTitle: 'Q',
      description: 'Description',
      isCollapsed: true,
    };

    const {container} = render(
      <MessageCard
        editCard={(() => null) as React.MouseEventHandler}
        {...props}
      >
        Content
      </MessageCard>,
    );

    t.true(getByText(container, 'Title'), 'Shows collapsed state title');
    t.true(
      container.querySelectorAll('.uic--collapsed').length > 0,
      'Shows collapsed state',
    );
    t.equals(
      container.querySelectorAll('.uic--card-error').length,
      0,
      'Should not show error state',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('MessageCard - latest collapsed', (t) => {
  try {
    const props = {
      onSubmit: (): Promise<void> => Promise.resolve(),
      name: 'test',
      title: 'Title',
      description: 'Description',
      isCollapsed: true,
      isLatestCard: true,
    };

    const {container} = render(
      <MessageCard
        editCard={(() => null) as React.MouseEventHandler}
        {...props}
      >
        Content
      </MessageCard>,
    );

    t.true(
      container.querySelectorAll('.uic--collapsed').length > 0,
      'Shows collapsed state',
    );
    t.true(
      getByText(container, 'Pick up where you left off'),
      'Shows incomplete summary',
    );
    t.true(getByText(container, 'Resume'), 'Shows resume link');
    t.true(
      container.querySelectorAll('.uic--card-error').length > 0,
      'Should show error state',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
