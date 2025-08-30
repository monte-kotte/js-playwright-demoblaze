import BasePage from './base.page.js';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        productBtn: (id) => `#tbodyid a[href="prod.html?idp_=${id}"]`,
    }

    async navigate() {
        await this.page.goto('/');
    }

    async openProduct(id) {
        await this.page.click(this.selectors.productBtn(id));
    }
}
