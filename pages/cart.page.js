import BasePage from './base.page.js';

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    selectors = {
        ...this.selectors,
    }
}
