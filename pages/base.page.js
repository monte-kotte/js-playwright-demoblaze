import { expect } from '@playwright/test';
import { waitForVisible } from '../utils/wait.js';

export default class BasePage {
    constructor(page) {
        this.page = page;
        this.cartBtn = this.page.locator('#cartur');
        this.loginBtn = this.page.locator('#login2');
        this.currentUser = this.page.locator('#nameofuser');
    }

    async expectTitleContains(text) {
        await expect(this.page).toHaveTitle(new RegExp(text));
    }

    async openCart() {
        await this.cartBtn.click()
    }

    async openLoginForm() {
        await this.loginBtn.click();
    }

    async getCurrentUserName() {
        const locator = await waitForVisible(this.currentUser);
        return locator.textContent();
    }
}
