import { expect } from '@playwright/test';
import { waitForVisible } from '../utils/wait.js';

export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    selectors = {
        cartBtn: '#cartur',
        loginBtn: '#login2',
        currentUser: '#nameofuser',
    }

    async expectTitleContains(text) {
        await expect(this.page).toHaveTitle(new RegExp(text));
    }

    async openCart() {
        await this.page.click(this.selectors.cartBtn);
    }

    async openLoginForm() {
        await this.page.click(this.selectors.loginBtn);
    }

    async getCurrentUserName() {
        const locator = await waitForVisible(this.page, this.selectors.currentUser);
        return locator.textContent();
    }
}
