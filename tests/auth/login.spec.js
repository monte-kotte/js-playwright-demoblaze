import { expect } from '@playwright/test';
import { user } from '../../data/users.js';
import { test } from '../../fixtures/test.setup.js';

test.describe('Login', () => {
    test('success authorization', async ({ pm }) => {
        await pm.homePage.navigate();
        const curUserName = await pm.homePage.getCurrentUserName();
        expect(curUserName).toContain(user.username);
    });
})
