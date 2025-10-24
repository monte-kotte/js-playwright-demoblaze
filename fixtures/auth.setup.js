import { test as setup } from '@playwright/test';
import path from 'path';
import { user } from '../data/users.js';
import PomManager from '../pages/manager/pom.manager.js';

const STORAGE_STATE = path.resolve(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ browser }) => {
    const context = await browser.newContext({
        baseURL: process.env.BASE_URL
    });
    const page = await context.newPage();

    const pm = new PomManager(page);
    await pm.homePage.navigate();
    await pm.homePage.openLoginForm();
    await pm.loginPage.login(user);
    await pm.homePage.validateCurrentUserName(user.username);

    await context.storageState({ path: STORAGE_STATE });
    await context.close();
});
