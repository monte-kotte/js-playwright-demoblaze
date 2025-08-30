import BasePage from './base.page.js';

export default class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        title: "#tbodyid>.name",
        price: 'h3.price-container',
        fullDescription: '#more-information p',
    }

    async navigate(productId) {
        await this.page.goto(`/prod.html?idp_=${productId}`);
    }

    async getProductTitle() {
        return await this.page.textContent(this.selectors.title);
    }

    async getPrice() {
        return await this.page.textContent(this.selectors.price);
    }

    async getFullDescription() {
        const text = await this.page.textContent(this.selectors.fullDescription);
        return text.replace(/\s+/g, ' ').trim();
    }

    async getProductInfo() {
        return {
            title: await this.getProductTitle(),
            price: await this.getPrice(),
            description: await this.getFullDescription(),
        };
    }
}
