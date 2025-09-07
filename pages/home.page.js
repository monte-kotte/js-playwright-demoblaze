import BasePage from './base.page.js';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.productBtn = (id) => this.page.locator(`.card-title a[href="prod.html?idp_=${id}"]`);
    }

    async navigate() {
        await this.page.goto('/');
    }

    async openProduct(id) {
        await this.productBtn(id).click();
    }
}
