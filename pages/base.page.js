import { expect } from '@playwright/test';
import { waitForVisible } from '../utils/wait.js';

export default class BasePage {
    constructor(page) {
        this.page = page;
        this.cartBtn = this.page.locator('#cartur');
        this.loginBtn = this.page.locator('#login2');
        this.currentUser = this.page.locator('#nameofuser');
    }

    async openCart() {
        await this.cartBtn.click()
    }

    async openLoginForm() {
        await this.loginBtn.click();
    }

    async validatePageTitle(text) {
        await expect(this.page).toHaveTitle(new RegExp(text));
    }

    async validateCurrentUserName(name) {
        await expect(this.currentUser).toContainText(name);
    }
}
