import { expect } from '@playwright/test';
import { MESSAGES } from "../data/constants/messages.js";
import { OrderConfirmation } from "../data/order-confirmation.class.js";
import BasePage from "./base.page";

export default class OrderPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Order form inputs
        this.nameInput = this.page.locator('#name');
        this.countryInput = this.page.locator('#country');
        this.cityInput = this.page.locator('#city');
        this.creditCardInput = this.page.locator('#card');
        this.purchaseBtn = this.page.locator('#orderModal button.btn-primary');

        // Order confirmation elements
        this.confirmAlert = this.page.locator('.sweet-alert');
        this.alertHeader = this.confirmAlert.locator('h2');
        this.confirmationMessage = this.confirmAlert.locator('.lead');
        this.confirmBtn = this.confirmAlert.locator('.confirm');
    }

    async fillOrderForm(data) {
        await this.nameInput.fill(data.name);
        await this.countryInput.fill(data.country);
        await this.cityInput.fill(data.city);
        await this.creditCardInput.fill(data.card);
        await this.purchaseBtn.click();
    }

    async validateOrderConfirmation(expectedTotal) {
        // Validate success message
        await expect(this.alertHeader).toHaveText(MESSAGES.ORDER.SUCCESS_TITLE);

        // Get confirmation message and parse it into OrderConfirmation object
        const confirmText = await this.confirmationMessage.textContent();
        const confirmation = OrderConfirmation.fromConfirmationText(confirmText);

        // Validate all confirmation details
        confirmation.validate(expectedTotal);

        // Close confirmation
        await this.confirmBtn.click();
    }
}
