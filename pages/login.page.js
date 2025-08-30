import BasePage from './base.page.js';
export { user } from '../data/users.js';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    selectors = {
        username: '#loginusername',
        password: '#loginpassword',
        loginBtn: '#logInModal .btn-primary',
    }

    async login(user) {
        await this.page.fill(this.selectors.username, user.username);
        await this.page.fill(this.selectors.password, user.password);
        await this.page.click(this.selectors.loginBtn);
    }
}
