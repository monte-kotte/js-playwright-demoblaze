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

    /**
     * Open a product by searching for its title text.
     * Will paginate through pages if product not found on current page.
     * @param {string} title The product title to find
     * @param {number} pageLimit Maximum number of pages to check
     * @returns {Promise<void>}
     */
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

    /**
     * Try to find and click a product on the current page
     * @private
     * @param {string} title The product title to find
     * @returns {Promise<boolean>} True if product was found and clicked
     */
    async #tryClickProduct(title) {
        const productLink = this.productByTitle(title);
        if (await productLink.count() > 0) {
            await productLink.click();
            return true;
        }
        return false;
    }

    /**
     * Navigate to the next page of products
     * @private
     * @param {number} currentPage The current page number
     * @param {number} pageLimit Maximum number of pages to check
     * @returns {Promise<boolean>} True if successfully moved to next page
     */
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
