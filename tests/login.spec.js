import test from '../fixtures/test.setup.js';
import { expect } from '@playwright/test';
import { user } from '../data/users.js'

test.describe('Login', () => {
    test('success login', async ({ pm }) => {
        await pm.homePage.navigate();
        await pm.homePage.expectTitleContains('STORE');
        await pm.homePage.openLoginForm();

        await pm.loginPage.login(user)
        const curUserName = await pm.homePage.getCurrentUserName();
        expect(curUserName).toContain(user.username);
    });
})