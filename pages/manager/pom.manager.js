import BasePage from '../base.page.js';
import CartPage from '../cart.page.js';
import HomePage from '../home.page.js';
import LoginPage from '../login.page.js';
import OrderPage from '../order.page.js';
import ProductPage from '../product.page.js';

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.cartPage = new CartPage(page);
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.orderPage = new OrderPage(page);
        this.productPage = new ProductPage(page);
    }
}
