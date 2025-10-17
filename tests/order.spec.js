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
});
