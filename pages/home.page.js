import { expect } from '@playwright/test';
import BasePage from './base.page.js';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.productBtn = (id) => this.page.locator(`.card-title a[href="prod.html?idp_=${id}"]`);
        this.nextBtn = this.page.locator('button#next2, a#next2, #next2');
        this.productByTitle = (title) => this.page.locator(`.card-title a`).filter({ hasText: title, exact: false });
        this.firstProductTitle = this.page.locator('.card-title a').first();
    }

    async navigate() {
        await this.page.goto('/');
    }

    async openProduct(id) {
        await this.productBtn(id).click();
    }

    async openProductByTitle(title, pageLimit = 10) {
        for (let currentPage = 1; currentPage <= pageLimit; currentPage++) {
            await this.firstProductTitle.waitFor();

            if (await this.#tryClickProduct(title)) {
                return;
            }

            if (await this.#goToNextPage(currentPage, pageLimit)) {
                continue;
            }

            throw new Error(`Product "${title}" not found after checking ${currentPage} page(s)`);
        }
    }

    async #tryClickProduct(title) {
        const productLink = this.productByTitle(title);
        if (await productLink.count() > 0) {
            await productLink.click();
            return true;
        }
        return false;
    }

    async #goToNextPage(currentPage, pageLimit) {
        if (currentPage < pageLimit && await this.nextBtn.isVisible()) {
            const currentFirstProduct = await this.firstProductTitle.textContent();
            await this.nextBtn.click();
            await expect(this.firstProductTitle).not.toHaveText(currentFirstProduct);
            return true;
        }
        return false;
    }

}
