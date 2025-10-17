import { user } from '../../data/users.js';
import { test } from '../../fixtures/test.setup.js';

test.describe('Login', () => {
    test('success authorization - home page', async ({ pm }) => {
        await pm.homePage.navigate();
        await pm.homePage.validateCurrentUserName(user.username)
    });

    test('success authorization - cart page', async ({ pm }) => {
        await pm.homePage.navigate();
        await pm.homePage.openCart();
        await pm.cartPage.validateCurrentUserName(user.username)
    });
})
