import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 10000,
  },
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'setup', testMatch: /.*\.setup\.js/ },
    {
      name: 'chromium-auth',
      testMatch: /tests\/auth\/.*\.spec\.js/,
      use: {
        browserName: 'chromium',
        storageState: 'playwright/.auth/user.json',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
      },
      dependencies: ['setup'],
    },
    {
      name: 'chromium',
      testIgnore: /tests\/auth\/.*/,
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
      },
    },
  ],
});
