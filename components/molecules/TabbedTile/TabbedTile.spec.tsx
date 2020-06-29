import {render, cleanup, fireEvent} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import TabbedTile from './TabbedTile';

test('TabbedTile - renders', (t) => {
  try {
    const props = {
      defaultView: 0,
      items: [
        {
          title: 'nav1',
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              Here is some text that I honestly cannot be bothered to write but
              I am doing it anyway.
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
        {
          title: `nav2`,
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              When you retire, this is our recommendation for the order in which
              you should withdraw funds from your accounts. This could save you
              money over time by avoiding fees and optimizing tax benefits.
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
        {
          title: `nav3`,
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              This is some other text!
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
      ],
    };
    const {getAllByText, getByText, container} = render(
      <TabbedTile {...props} />,
    );

    // Accounts for the default view of the mobile navigation.
    t.equals(getAllByText('nav1').length, 2);
    t.equals(getAllByText('nav2').length, 1);
    t.equals(getAllByText('nav3').length, 1);

    const secondItem = getByText('nav2');

    fireEvent.click(secondItem);

    // Verifies the active item changes.
    t.true(
      container
        .querySelectorAll('.uic--tabbed-tile__navigation-box--item')[1]
        .classList.contains('uic--tabbed-tile__navigation-box--item-active'),
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('TabbedTile - renders correctly in dark mode', (t) => {
  try {
    const props = {
      isDark: true,
      items: [
        {
          title: 'darknav1',
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              Here is some text that I honestly cannot be bothered to write but
              I am doing it anyway.
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
        {
          title: `darknav2`,
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              When you retire, this is our recommendation for the order in which
              you should withdraw funds from your accounts. This could save you
              money over time by avoiding fees and optimizing tax benefits.
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
        {
          title: `darknav3`,
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              This is some other text!
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
      ],
    };
    const {getAllByText} = render(<TabbedTile {...props} />);

    t.equals(getAllByText('darknav1').length, 2);
    t.equals(getAllByText('darknav2').length, 1);
    t.equals(getAllByText('darknav3').length, 1);
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('TabbedTile - toggles using the bubble dropdown', (t) => {
  try {
    const props = {
      defaultView: 0,
      items: [
        {
          title: 'nav1',
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              Here is some text that I honestly cannot be bothered to write but
              I am doing it anyway.
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
        {
          title: `nav2`,
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              When you retire, this is our recommendation for the order in which
              you should withdraw funds from your accounts. This could save you
              money over time by avoiding fees and optimizing tax benefits.
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
        {
          title: `nav3`,
          tileContent: (
            <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
              This is some other text!
            </p>
          ),
          tileProps: {
            footerContent: <div />,
          },
        },
      ],
    };
    const {getAllByText, container} = render(<TabbedTile {...props} />);

    // Accounts for the default view of the mobile navigation.
    t.equals(getAllByText('nav1').length, 2);
    t.equals(getAllByText('nav2').length, 1);
    t.equals(getAllByText('nav3').length, 1);

    fireEvent.click(getAllByText('nav1')[0]);

    // Change dropdown to investment strategy 2
    fireEvent.keyDown(getAllByText('nav1')[0], {
      key: 'ArrowDown',
    });

    fireEvent.keyDown(getAllByText('nav1')[0], {
      key: 'Enter',
    });

    fireEvent.click(getAllByText('nav2')[0]);

    // Verifies the active item changes.
    t.true(
      container
        .querySelectorAll('.uic--tabbed-tile__navigation-box--item')[1]
        .classList.contains('uic--tabbed-tile__navigation-box--item-active'),
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
