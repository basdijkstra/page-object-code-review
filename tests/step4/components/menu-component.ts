import {Page} from "playwright";

export class MenuComponent {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async select(menuItem: string) {
        await this.page.getByRole('link', { name: menuItem }).click();
    }
}