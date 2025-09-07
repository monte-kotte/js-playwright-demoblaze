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

    async getProductTitle() {
        return await this.title.textContent();
    }

    async getPrice() {
        return await this.price.textContent();
    }

    async getFullDescription() {
        const text = await this.fullDescription.textContent();
        return text.replace(/\s+/g, ' ').trim();
    }

    async getProductInfo() {
        return {
            title: await this.getProductTitle(),
            price: await this.getPrice(),
            description: await this.getFullDescription(),
        };
    }

    async addProductToCart() {
        await this.addToCartBtn.click();
    }
}
