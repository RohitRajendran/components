import {render, fireEvent, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import DoubleDonut from './DoubleDonut';
import {stub} from 'sinon';

test('DoubleDonut - renders', (t) => {
  try {
    const props = {
      onChange: stub(),
      items: {
        Bonds: {
          value: 21.4,
          color: '#42bad2',
        },
        'Emerging Market Bonds Hedged': {
          value: 4.3,
          color: '#98d7e1',
        },
        'Emerging Markets Stocks': {
          value: 5.7,
          color: '#98d7d0',
        },
        'Foreign Bonds': {
          value: 10.7,
          color: '#6dc9da',
        },
        'International Small Cap Stocks': {
          value: 6.4,
          color: '#ccb9e5',
        },
        'International Stocks': {
          value: 13,
          color: '#ab87d9',
        },
        'Large Cap Stocks': {
          value: 25.7,
          color: '#6524c2',
        },
        'Small Cap Stocks': {
          value: 5.4,
          color: '#8856ce',
        },
        TIPS: {
          value: 5.4,
          color: '#c2e5e9',
        },
        Cash: {
          value: 1,
          color: '#56b28c',
        },
        REITs: {
          value: 1,
          color: '#42bad2',
        },
      },
      categories: {
        Bonds: {
          items: [
            'Bonds',
            'Foreign Bonds',
            'Emerging Market Bonds Hedged',
            'TIPS',
          ],
          color: '#23b1cd',
          value: 41.8,
        },
        Stocks: {
          items: [
            'Large Cap Stocks',
            'Small Cap Stocks',
            'International Stocks',
            'International Small Cap Stocks',
            'Emerging Markets Stocks',
          ],
          color: '#4d00ba',
          value: 56.2,
        },
        Other: {
          items: ['Cash', 'REITs'],
          color: '#018e54',
          value: 2,
        },
      },
      title: 'Asset Double Donut',
    };

    const {container} = render(<DoubleDonut {...props} />);

    t.equals(
      container.querySelectorAll('.uic--double-donut').length,
      1,
      'Should load the DoubleDonut component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DoubleDonut - allows you to click and highlight path', (t) => {
  try {
    const props = {
      onChange: stub(),
      items: {
        Bonds: {
          value: 21.4,
          color: '#42bad2',
        },
        'Emerging Market Bonds Hedged': {
          value: 4.3,
          color: '#98d7e1',
        },
        'Emerging Markets Stocks': {
          value: 5.7,
          color: '#98d7d0',
        },
        'Foreign Bonds': {
          value: 10.7,
          color: '#6dc9da',
        },
        'International Small Cap Stocks': {
          value: 6.4,
          color: '#ccb9e5',
        },
        'International Stocks': {
          value: 13,
          color: '#ab87d9',
        },
        'Large Cap Stocks': {
          value: 25.7,
          color: '#6524c2',
        },
        'Small Cap Stocks': {
          value: 5.4,
          color: '#8856ce',
        },
        TIPS: {
          value: 5.4,
          color: '#c2e5e9',
        },
        Cash: {
          value: 1,
          color: '#56b28c',
        },
        REITs: {
          value: 1,
          color: '#42bad2',
        },
      },
      categories: {
        Bonds: {
          items: [
            'Bonds',
            'Foreign Bonds',
            'Emerging Market Bonds Hedged',
            'TIPS',
          ],
          color: '#23b1cd',
          value: 41.8,
        },
        Stocks: {
          items: [
            'Large Cap Stocks',
            'Small Cap Stocks',
            'International Stocks',
            'International Small Cap Stocks',
            'Emerging Markets Stocks',
          ],
          color: '#4d00ba',
          value: 56.2,
        },
        Other: {
          items: ['Cash', 'REITs'],
          color: '#018e54',
          value: 2,
        },
      },
      title: 'Asset Double Donut',
    };

    const map: {
      [key: string]: Function;
    } = {};

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    document.addEventListener = stub((event: string, func: Function) => {
      // Mocks addEventListener so we can call the handleClickOutside handler directly.
      map[event] = func;
    });

    const {getByText, getByTestId} = render(
      <div className="wrapper">
        <DoubleDonut {...props} />
      </div>,
    );

    fireEvent.mouseEnter(getByTestId('uic--double-donut__wrapper'));
    fireEvent.mouseLeave(getByTestId('uic--double-donut__wrapper'));

    fireEvent.mouseEnter(getByTestId('uic--double-donut__container--Bonds'));
    fireEvent.mouseLeave(getByTestId('uic--double-donut__container--Bonds'));
    fireEvent.click(getByTestId('uic--double-donut__slice--Bonds'));

    t.true(getByText('Emerging Market 4.3%'), 'Legend item should be present.');

    fireEvent.click(getByTestId('uic--double-donut__slice--subcategory-Bonds'));

    t.equals(
      props.onChange.callCount,
      2,
      'Should fire the onChange handler twice for the category and subcategory',
    );

    // Resets to ensure that the handleClickOutside handler works without throwing an error.
    map.mousedown({
      target: document.createElement('div'),
    });
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DoubleDonut - allows you to click a legend item to select a category', (t) => {
  try {
    const props = {
      onChange: stub(),
      items: {
        Bonds: {
          value: 21.4,
          color: '#42bad2',
        },
        'Emerging Market Bonds Hedged': {
          value: 4.3,
          color: '#98d7e1',
        },
        'Emerging Markets Stocks': {
          value: 5.7,
          color: '#98d7d0',
        },
        'Foreign Bonds': {
          value: 10.7,
          color: '#6dc9da',
        },
        'International Small Cap Stocks': {
          value: 6.4,
          color: '#ccb9e5',
        },
        'International Stocks': {
          value: 13,
          color: '#ab87d9',
        },
        'Large Cap Stocks': {
          value: 25.7,
          color: '#6524c2',
        },
        'Small Cap Stocks': {
          value: 5.4,
          color: '#8856ce',
        },
        TIPS: {
          value: 5.4,
          color: '#c2e5e9',
        },
        Cash: {
          value: 1,
          color: '#56b28c',
        },
        REITs: {
          value: 1,
          color: '#42bad2',
        },
      },
      categories: {
        Bonds: {
          items: [
            'Bonds',
            'Foreign Bonds',
            'Emerging Market Bonds Hedged',
            'TIPS',
          ],
          color: '#23b1cd',
          value: 41.8,
        },
        Stocks: {
          items: [
            'Large Cap Stocks',
            'Small Cap Stocks',
            'International Stocks',
            'International Small Cap Stocks',
            'Emerging Markets Stocks',
          ],
          color: '#4d00ba',
          value: 56.2,
        },
        Other: {
          items: ['Cash', 'REITs'],
          color: '#018e54',
          value: 2,
        },
      },
      title: 'Asset Double Donut',
    };

    const map: {
      [key: string]: Function;
    } = {};

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    document.addEventListener = stub((event: string, func: Function) => {
      // Mocks addEventListener so we can call the handleClickOutside handler directly.
      map[event] = func;
    });

    const {getByText} = render(
      <div className="wrapper">
        <DoubleDonut {...props} />
      </div>,
    );

    fireEvent.click(getByText('Bonds'));
    t.true(getByText('Emerging Market 4.3%'), 'Legend item should be present.');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DoubleDonut - displays the donut easter egg after six clicks', (t) => {
  try {
    const props = {
      onChange: stub(),
      items: {
        Bonds: {
          value: 21.4,
          color: '#42bad2',
        },
        'Emerging Market Bonds Hedged': {
          value: 4.3,
          color: '#98d7e1',
        },
        'Emerging Markets Stocks': {
          value: 5.7,
          color: '#98d7d0',
        },
        'Foreign Bonds': {
          value: 10.7,
          color: '#6dc9da',
        },
        'International Small Cap Stocks': {
          value: 6.4,
          color: '#ccb9e5',
        },
        'International Stocks': {
          value: 13,
          color: '#ab87d9',
        },
        'Large Cap Stocks': {
          value: 25.7,
          color: '#6524c2',
        },
        'Small Cap Stocks': {
          value: 5.4,
          color: '#8856ce',
        },
        TIPS: {
          value: 5.4,
          color: '#c2e5e9',
        },
        Cash: {
          value: 1,
          color: '#56b28c',
        },
        REITs: {
          value: 1,
          color: '#42bad2',
        },
      },
      categories: {
        Stocks: {
          items: [
            'Large Cap Stocks',
            'Small Cap Stocks',
            'International Stocks',
            'International Small Cap Stocks',
            'Emerging Markets Stocks',
          ],
          color: '#4d00ba',
          value: 56.2,
        },
        Bonds: {
          items: [
            'Bonds',
            'Foreign Bonds',
            'Emerging Market Bonds Hedged',
            'TIPS',
          ],
          color: '#23b1cd',
          value: 41.8,
        },
        Other: {
          items: ['Cash', 'REITs'],
          color: '#018e54',
          value: 2,
        },
      },
      title: 'Asset Double Donut',
    };

    const {getByTestId} = render(<DoubleDonut {...props} />);

    fireEvent.click(getByTestId('easter-egg-click'));
    fireEvent.click(getByTestId('easter-egg-click'));
    fireEvent.click(getByTestId('easter-egg-click'));
    fireEvent.click(getByTestId('easter-egg-click'));
    fireEvent.click(getByTestId('easter-egg-click'));
    fireEvent.click(getByTestId('easter-egg-click'));
    fireEvent.click(getByTestId('easter-egg-click'));

    t.true(getByTestId('easter-egg'), 'The easter egg should be displayed.');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
