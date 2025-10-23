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
        // Set up navigation and dialog promises before clicking
        const dialogPromise = this.page.waitForEvent('dialog');
        const addToCartRequest = this.page.waitForRequest(request =>
            request.url().includes('/addtocart')
        );

        // Click and wait for dialog
        await this.addToCartBtn.click();
        const dialog = await dialogPromise;

        // Accept dialog and wait for request to complete
        await Promise.all([
            dialog.accept(),
            addToCartRequest
        ]);
    }

    async goHome() {
        await this.page.goto('/');
    }
}
