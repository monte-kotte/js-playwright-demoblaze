import { Product } from './product.class.js';

export const product1 = new Product(1, 'Samsung galaxy s6', '$360',
    'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor');
export const product2 = new Product(2, 'Nokia lumia 1520', '$820',
    'The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800');
export const product3 = new Product(3, 'Nexus 6', '$650',
    'The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805');

export const products = [product1, product2, product3];