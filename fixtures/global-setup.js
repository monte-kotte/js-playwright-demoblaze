import { chromium } from '@playwright/test';
import path from 'path';
import { user } from '../data/users.js';
import PomManager from '../pages/manager/pom.manager.js';

const STORAGE_STATE = path.join(__dirname, '../playwright/.auth/user.json');

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        baseURL: process.env.BASE_URL
    });
    const page = await context.newPage();

    const pm = new PomManager(page);
    await pm.homePage.navigate();
    await pm.homePage.openLoginForm();
    await pm.loginPage.login(user);
    await pm.homePage.getCurrentUserName();

    await context.storageState({ path: STORAGE_STATE });
    await browser.close();
}

export default globalSetup;
