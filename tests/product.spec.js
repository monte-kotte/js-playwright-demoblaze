import { products } from '../data/products.js';
import { test } from '../fixtures/test.setup.js';

test.describe('Demoblaze products', () => {
    products.forEach((product) => {
        test(`check product ${product.id}: ${product.title}`, async ({ pm }) => {
            await pm.homePage.navigate();
            await pm.homePage.openProductByTitle(product.title);

            await pm.productPage.validateProductInfo(product);
        });
    });
});
