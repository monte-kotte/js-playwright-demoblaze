import { expect } from '@playwright/test';

/**
 * Wait until the locator is visible and return it
 * @param {import('@playwright/test').Page} page
 * @param {string} selector - CSS or XPath selector
 * @returns {import('@playwright/test').Locator}
 */
export async function waitForVisible(page, selector) {
    const locator = page.locator(selector);
    await locator.waitFor({ state: 'visible' });
    return locator;
}

/**
 * Wait until the locator is hidden
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 */
export async function waitForHidden(page, selector) {
    const locator = page.locator(selector);
    await locator.waitFor({ state: 'hidden' });
}

/**
 * Wait until text is visible in a locator
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {string|RegExp} text
 */
export async function waitForText(page, selector, text) {
    const locator = page.locator(selector);
    await locator.waitFor({ state: 'visible' });
    await expect(locator).toHaveText(text);
}
