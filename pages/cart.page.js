import { expect } from '@playwright/test';
import BasePage from './base.page.js';

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Use getByRole for better accessibility and reliability
        this.productRows = this.page.locator('#tbodyid tr');
        this.placeOrderBtn = this.page.locator('button[data-target="#orderModal"]');
        this.totalPrice = this.page.locator('#totalp');
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }

    async validateProductTitle(title) {
        // Find row containing the product title
        const titleCell = this.productRows.locator('td', { hasText: title }).first();
        await expect(titleCell).toBeVisible();
    }

    async validateProductPrice(price) {
        // Find row containing the product price
        const priceCell = this.productRows.locator('td', { hasText: price.replace('$', '') }).first();
        await expect(priceCell).toBeVisible();
    }

    async validateTotalPrice(expected) {
        const actualTotal = await this.totalPrice.textContent();
        expect(parseInt(actualTotal)).toBe(expected);
    }
}
