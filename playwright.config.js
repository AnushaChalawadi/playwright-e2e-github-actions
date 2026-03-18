const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
   testDir: './tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Reports */
  reporter: [['allure-playwright'], ['html']],
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    headless: true,
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    workers: 2,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    }
  ],
};

module.exports = config;