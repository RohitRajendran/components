const nightwatch_config = {
  src_folders: ['nightwatch/tests'],

  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80,
  },

  test_settings: {
    default: {
      launch_url: 'https://ui.unitedincome.com/develop',
      desiredCapabilities: {
        build: 'storybook',
        'browserstack.user': process.env.BROWSERSTACK_USER,
        'browserstack.key': process.env.BROWSERSTACK_PASS,
        'browserstack.debug': true,
        'browserstack.sendKeys': true,
        'browserstack.networkLogs': true,
        os: 'Windows',
        os_version: '10',
        browser: 'internet explorer',
        resolution: '1440x900',
      },
    },
  },
};

module.exports = nightwatch_config;
