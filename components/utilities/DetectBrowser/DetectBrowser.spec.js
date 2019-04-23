import test from 'tape';
import {
  detectInternetExplorer,
  detectIOS,
  detectTablet,
  detectMobile,
} from './DetectBrowser';

test('detectInternetExplorer - Should return a string if the userAgent matches the param', (t) => {
  t.plan(8);

  // No UA
  t.false(detectInternetExplorer());

  // Internet Explorer
  navigator.__defineGetter__('userAgent', () => {
    return 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; rv:11.0) like Gecko';
  });

  t.true(detectInternetExplorer());

  navigator.__defineGetter__('userAgent', () => {
    return 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; rv:11.0) like Gecko';
  });

  t.true(detectInternetExplorer());

  navigator.__defineGetter__('userAgent', () => {
    return 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';
  });

  t.true(detectInternetExplorer());

  // Edge
  navigator.__defineGetter__('userAgent', () => {
    return 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136';
  });

  t.true(detectInternetExplorer());

  // Chrome
  navigator.__defineGetter__('userAgent', () => {
    return '  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';
  });

  t.false(detectInternetExplorer());

  // Firefox
  navigator.__defineGetter__('userAgent', () => {
    return 'Mozilla/5.0 (Windows NT 5.1; rv:7.0.1) Gecko/20100101 Firefox/7.0.1';
  });

  t.false(detectInternetExplorer());

  // Safari
  navigator.__defineGetter__('userAgent', () => {
    return 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1';
  });

  t.false(detectInternetExplorer());
});

test('detectIOS - Should return true or false if the user is on iOS', (t) => {
  t.false(detectIOS());

  t.end();
});

test('detectTablet - Should return true or false if the user is on a tablet', (t) => {
  t.true(detectTablet());

  t.end();
});

test('detectMobile - Should return true or false if the user is on mobile', (t) => {
  t.true(detectMobile());

  t.end();
});
