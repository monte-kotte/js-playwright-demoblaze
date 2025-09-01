import BasePage from "./base.page";

export default class OrderPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        nameInput: '#name',
        countryInput: '#country',
        cityInput: '#city',
        creditCardInput: '#card',
        purchaseBtn: '#orderModal button.btn-primary',
        afterOrderAlertHeader: '.sweet-alert h2',
    }

    async fillOrderForm(data) {
        await this.page.locator(this.selectors.nameInput).fill(data.name);
        await this.page.locator(this.selectors.countryInput).fill(data.country);
        await this.page.locator(this.selectors.cityInput).fill(data.city);
        await this.page.locator(this.selectors.creditCardInput).fill(data.card);
        await this.page.click(this.selectors.purchaseBtn);
    }

    async getAllertHeading() {
        return await this.page.textContent(this.selectors.afterOrderAlertHeader);
    }
}
