import { test as base } from '@playwright/test';
import PomManager from '../pages/manager/pom.manager.js';

export const test = base.extend({
    pm: async ({ page }, use) => {
        const pm = new PomManager(page);
        await use(pm);
    },
});
