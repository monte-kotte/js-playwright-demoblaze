import BasePage from './base.page.js';

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    selectors = {
        ...this.selectors,
    }

    selectors = {
        ...this.selectors,
        productTitle: '#tbodyid tr:ntH-child(1) td:nth-child(2)',
        productPrice: '#tbodyid tr:ntH-child(1) td:nth-child(3)',
        placeOrderBtn: 'button[data-target="#orderModal"]',
    }

    async getProductTitle() {
        return await this.page.textContent(this.selectors.productTitle);
    }

    async getProductPrice() {
        const price = await this.page.textContent(this.selectors.productPrice);
        return `$${price}`;
    }

    async placeOrder() {
        await this.page.click(this.selectors.placeOrderBtn);
    }
}
