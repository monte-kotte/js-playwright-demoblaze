import { expect } from '@playwright/test';
import BasePage from './base.page.js';

export default class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.title = this.page.locator('#tbodyid>.name');
        this.price = this.page.locator('h3.price-container');
        this.fullDescription = this.page.locator('#more-information p');
        this.addToCartBtn = this.page.locator('.btn-success');
    }

    async navigate(productId) {
        await this.page.goto(`/prod.html?idp_=${productId}`);
    }

    async validateProductInfo(product) {
        await expect(this.title).toHaveText(product.title);
        await expect(this.price).toContainText(product.price);

        const text = await this.fullDescription.textContent();;
        expect(text.replace(/\s+/g, ' ').trim()).toContain(product.description);
    }

    async addProductToCart() {
        await this.addToCartBtn.click();
    }
}
