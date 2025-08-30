import { test as base, chromium } from '@playwright/test';
import PomManager from '../pages/manager/pom.manager'

const test = base.extend({
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
});

export default test;
