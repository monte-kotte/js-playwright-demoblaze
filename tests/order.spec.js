import { test } from '../fixtures/test.setup.js';
import { expect } from '@playwright/test';
import { product1 as testProduct } from '../data/products.js';
import { order } from '../data/orders.js'

test.describe('Order', () => {
    test('one product purchase', async ({ pm }) => {
        // Open product
        await pm.homePage.navigate();
        await pm.homePage.openProduct(testProduct.id);
        // Add product to cart
        await pm.productPage.addProductToCart();
        // Check product in cart
        await pm.productPage.openCart();
        const cartProductTitle = await pm.cartPage.getProductTitle();
        const cartProductPrice = await pm.cartPage.getProductPrice();

        await expect(cartProductTitle).toBe(testProduct.title);
        await expect(cartProductPrice).toBe(testProduct.price);

        // Place order and fill the form
        await pm.cartPage.placeOrder();
        await pm.orderPage.fillOrderForm(order);
        // Validate success purchase
        const result = await pm.orderPage.getAllertHeading();
        expect(result).toBe('Thank you for your purchase!');
    });
});
