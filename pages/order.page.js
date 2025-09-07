import BasePage from "./base.page";

export default class OrderPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.nameInput = this.page.locator('#name');
        this.countryInput = this.page.locator('#country');
        this.cityInput = this.page.locator('#city');
        this.creditCardInput = this.page.locator('#card');
        this.purchaseBtn = this.page.locator('#orderModal button.btn-primary');
        this.afterOrderAlertHeader = this.page.locator('.sweet-alert h2');
    }

    async fillOrderForm(data) {
        await this.nameInput.fill(data.name);
        await this.countryInput.fill(data.country);
        await this.cityInput.fill(data.city);
        await this.creditCardInput.fill(data.card);
        await this.purchaseBtn.click();
    }

    async getAllertHeading() {
        return await this.afterOrderAlertHeader.textContent();
    }
}
