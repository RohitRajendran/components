module.exports = {
  'Check if storybook is loading': (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#atoms-chanceofsuccess')
      .click('#atoms-chanceofsuccess')
      .end();
  },
};