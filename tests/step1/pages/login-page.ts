import {Locator, Page} from "playwright";

export class LoginPage {

    readonly page: Page;
    readonly textfieldUsername: Locator;
    readonly textfieldPassword: Locator;
    readonly buttonDoLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textfieldUsername = page.locator('[name=username]');
        this.textfieldPassword = page.locator('[name=password]');
        this.buttonDoLogin = page.getByRole('button', { name: 'Log In' });
    }

    async open() {
        await this.page.goto('http://localhost:8080/parabank');
    }

    async setUsername(username: string) {
        await this.textfieldUsername.fill(username);
    }

    async setPassword(password: string) {
        await this.textfieldPassword.fill(password);
    }

    async doLogin() {
        await this.buttonDoLogin.click();
    }
}