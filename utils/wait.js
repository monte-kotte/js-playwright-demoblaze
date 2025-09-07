import { expect } from '@playwright/test';

/**
 * Wait until the locator is visible and return it
 * @param {import('@playwright/test').Locator} locator
 * @returns {import('@playwright/test').Locator}
 */
export async function waitForVisible(locator) {
    await locator.waitFor({ state: 'visible' });
    return locator;
}

/**
 * Wait until the locator is hidden
 * @param {import('@playwright/test').Locator} locator
 */
export async function waitForHidden(locator) {
    await locator.waitFor({ state: 'hidden' });
}

/**
 * Wait until text is visible in a locator
 * @param {import('@playwright/test').Locator} locator
 * @param {string|RegExp} text
 */
export async function waitForText(locator, text) {
    await locator.waitFor({ state: 'visible' });
    await expect(locator).toHaveText(text);
}
