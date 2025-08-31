import { expect } from '@playwright/test';
import { user } from '../../data/users.js';
import { test } from '../../fixtures/test.setup.js';

test.describe('Login', () => {
    test('success authorization - home page', async ({ pm }) => {
        await pm.homePage.navigate();
        const curUserName = await pm.homePage.getCurrentUserName();
        expect(curUserName).toContain(user.username);
    });

    test('success authorization - cart page', async ({ pm }) => {
        await pm.homePage.navigate();
        await pm.homePage.openCart();
        const curUserName = await pm.cartPage.getCurrentUserName();
        expect(curUserName).toContain(user.username);
    });
})
