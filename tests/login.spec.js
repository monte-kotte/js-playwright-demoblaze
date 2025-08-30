import { test } from '../fixtures/test.setup.js';
import { expect } from '@playwright/test';
import { user } from '../data/users.js'

test.describe('Login', () => {
    test('success login', async ({ authPm }) => {
        await authPm.homePage.navigate();

        const curUserName = await authPm.homePage.getCurrentUserName();
        expect(curUserName).toContain(user.username);
    });
})
