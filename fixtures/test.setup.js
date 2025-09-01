import { test as base, chromium } from '@playwright/test';
import path from 'path';
import PomManager from '../pages/manager/pom.manager.js';

const STORAGE_STATE = path.join(__dirname, '../playwright/.auth/user.json');

export const test = base.extend({
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
