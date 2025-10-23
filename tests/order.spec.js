import { test } from '../fixtures/test.setup.js';
import { MESSAGES } from '../data/constants/messages.js';
import { order } from '../data/orders.js';
import { products } from '../data/products.js';

test.describe('Order placement', () => {
    test.beforeEach(async ({ pm }) => {
        await pm.homePage.navigate();
    });

    test('single product order', async ({ pm }) => {
        const product = products[0]; // Using first product for single order

        await test.step('add product to cart', async () => {
            await pm.homePage.openProductByTitle(product.title);
            await pm.productPage.addProductToCart();
        });

        await test.step('verify cart contents', async () => {
            await pm.productPage.openCart();
            await pm.cartPage.validateProductTitle(product.title);
            await pm.cartPage.validateProductPrice(product.price);
            await pm.cartPage.validateTotalPrice(product.numericPrice);
        });

        await test.step('complete purchase', async () => {
            await pm.cartPage.placeOrder();
            await pm.orderPage.fillOrderForm(order);
            await pm.orderPage.validateOrderConfirmation(product.numericPrice);
        });
    });

    test('multiple products order', async ({ pm }) => {
        const [firstProduct, secondProduct] = products.slice(0, 2);
        let expectedTotal;

        await test.step('add products to cart', async () => {
            // Add first product
            await pm.homePage.openProductByTitle(firstProduct.title);
            await pm.productPage.addProductToCart();
            await pm.productPage.goHome();

            // Add second product
            await pm.homePage.openProductByTitle(secondProduct.title);
            await pm.productPage.addProductToCart();
        });

        await test.step('verify cart contents', async () => {
            await pm.productPage.openCart();
            await pm.cartPage.validateProductTitle(firstProduct.title);
            await pm.cartPage.validateProductPrice(firstProduct.price);
            await pm.cartPage.validateProductTitle(secondProduct.title);
            await pm.cartPage.validateProductPrice(secondProduct.price);

            expectedTotal = firstProduct.numericPrice + secondProduct.numericPrice;
            await pm.cartPage.validateTotalPrice(expectedTotal);
        });

        await test.step('complete purchase', async () => {
            await pm.cartPage.placeOrder();
            await pm.orderPage.fillOrderForm(order);
            await pm.orderPage.validateOrderConfirmation(expectedTotal);
        });
    });
});
