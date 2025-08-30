import BasePage from '../base.page.js'
import HomePage from '../home.page.js'
import ProductPage from '../product.page.js'
import LoginPage from '../login.page.js'

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.loginPage = new LoginPage(page);
    }
}
