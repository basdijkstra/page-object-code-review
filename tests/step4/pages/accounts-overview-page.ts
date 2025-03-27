import {Page} from "playwright";
import {MenuComponent} from "../components/menu-component";

export class AccountsOverviewPage {

    readonly page: Page;
    readonly menuComponent: MenuComponent;

    constructor(page: Page) {
        this.page = page;
        this.menuComponent = new MenuComponent(page);
    }

    async selectMenuItem(menuItem: string) {
        await this.menuComponent.select(menuItem);
    }
}