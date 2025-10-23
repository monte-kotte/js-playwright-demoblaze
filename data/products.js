import { Product } from './product.class.js';

export const product1 = new Product(1, 'Samsung galaxy s6', '$360',
    'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor');
export const product2 = new Product(2, 'Nokia lumia 1520', '$820',
    'The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800');
export const product3 = new Product(3, 'Nexus 6', '$650',
    'The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805');

export const product10 = new Product(10, 'Apple monitor 24', '$400',
    'LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD display with IPS technology and an optimum resolution of 2560x1440. It has a 178 degree horizontal and vertical viewing angle, a "typical" brightness of 375 cd/m2, contrast ratio of 1000:1, and a 12 ms response time.');

export const products = [product1, product2, product3, product10];
