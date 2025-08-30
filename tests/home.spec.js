import { test } from '../fixtures/test.setup.js';

test.describe('Demoblaze home page', () => {
  test('load store', async ({ pm }) => {
    await pm.homePage.navigate();
    await pm.homePage.expectTitleContains('STORE');
  });
})
