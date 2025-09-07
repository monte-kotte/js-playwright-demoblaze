import BasePage from './base.page.js';

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.productTitle = this.page.locator('#tbodyid tr:ntH-child(1) td:nth-child(2)');
        this.productPrice = this.page.locator('#tbodyid tr:ntH-child(1) td:nth-child(3)');
        this.placeOrderBtn = this.page.locator('button[data-target="#orderModal"]');

    }
    async getProductTitle() {
        return await this.productTitle.textContent();
    }

    async getProductPrice() {
        const price = await this.productPrice.textContent();
        return `$${price}`;
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }
}
