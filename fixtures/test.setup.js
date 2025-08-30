import { test as base, chromium } from '@playwright/test';
import PomManager from '../pages/manager/pom.manager.js';
import path from 'path';

const STORAGE_STATE = path.join(__dirname, '../playwright/.auth/user.json');

export const test = base.extend({
    browser: async ({ }, use) => {
        const browser = await chromium.launch();
        await use(browser);
        await browser.close();
    },

    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },

    pm: async ({ page }, use) => {
        const pm = new PomManager(page);
        await use(pm);
    },

    // authenticated fixtures
    authContext: async ({ browser }, use) => {
        const context = await browser.newContext(
            {
                storageState: STORAGE_STATE,
                baseURL: process.env.BASE_URL
            });
        await use(context);
        await context.close();
    },

    authPage: async ({ authContext }, use) => {
        const page = await authContext.newPage();
        await use(page);
        await page.close();
    },

    authPm: async ({ authPage }, use) => {
        const pm = new PomManager(authPage);
        await use(pm);
    },
});
