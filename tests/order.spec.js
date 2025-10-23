import { MESSAGES } from '../data/constants/messages.js';
import { order } from '../data/orders.js';
import { product1 as testProduct } from '../data/products.js';
import { test } from '../fixtures/test.setup.js';

test.describe('Order', () => {
    test('one product purchase', async ({ pm }) => {
        // Open product
        await pm.homePage.navigate();
        await pm.homePage.openProduct(testProduct.id);
        // Add product to cart
        await pm.productPage.addProductToCart();
        // Check product in cart
        await pm.productPage.openCart();

        await pm.cartPage.validateProductTitle(testProduct.title);
        await pm.cartPage.validateProductPrice(testProduct.price);

        // Place order and fill the form
        await pm.cartPage.placeOrder();
        await pm.orderPage.fillOrderForm(order);
        // Validate success purchase
        await pm.orderPage.validateAllertHeading(MESSAGES.ORDER.SUCCESS_TITLE);
    });

    test('multiple products purchase', async ({ pm }) => {
        const { product1: phone, product10: monitor } = await import('../data/products.js');

        // Add first product
        await pm.homePage.navigate();
        await pm.homePage.openProductByTitle(phone.title);
        await pm.productPage.addProductToCart();
        await pm.productPage.goHome();

        // Add second product
        await pm.homePage.openProductByTitle(monitor.title);
        await pm.productPage.addProductToCart();

        // Check products in cart
        await pm.productPage.openCart();
        await pm.cartPage.validateProductTitle(phone.title);
        await pm.cartPage.validateProductPrice(phone.price);
        await pm.cartPage.validateProductTitle(monitor.title);
        await pm.cartPage.validateProductPrice(monitor.price);

        // Calculate and validate total price
        const expectedTotal = phone.numericPrice + monitor.numericPrice;
        await pm.cartPage.validateTotalPrice(expectedTotal);

        // Place order and fill the form
        await pm.cartPage.placeOrder();
        await pm.orderPage.fillOrderForm(order);

        // Validate success purchase
        await pm.orderPage.validateAllertHeading(MESSAGES.ORDER.SUCCESS_TITLE);
    });
});
