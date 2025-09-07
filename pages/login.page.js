import BasePage from './base.page.js';
export { user } from '../data/users.js';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.username = this.page.locator('#loginusername');
        this.password = this.page.locator('#loginpassword');
        this.loginBtn = this.page.locator('#logInModal .btn-primary');
    }

    async login(user) {
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.loginBtn.click();
    }
}
