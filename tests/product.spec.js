import { test } from '../fixtures/test.setup.js';
import { expect } from '@playwright/test';
import { products } from '../data/products.js';

test.describe('Demoblaze products', () => {
    products.forEach((product) => {
        test(`check product ${product.id}: ${product.title}`, async ({ pm }) => {
            // Navigate to home and open product
            await pm.homePage.navigate();
            await pm.homePage.openProduct(product.id);

            // Get product info
            const productInfo = await pm.productPage.getProductInfo();

            // Assertions
            expect(productInfo.title).toBe(product.title);
            expect(productInfo.price).toContain(product.price);
            expect(productInfo.description.replace(/\s+/g, ' ').trim())
                .toContain(product.description);
        });
    });
});
