import {Locator, Page} from "playwright";

export class ReportFormField {

    readonly page: Page;
    readonly textfield: Locator;
    readonly buttonLockPermissions: Locator;

    constructor(page: Page, formFieldName: string) {
        this.page = page;
        this.textfield = page.getByTestId(`${formFieldName}_textfield`);
        this.buttonLockPermissions = page.getByTestId(`${formFieldName}_lock`);
    }

    async complete(text: string, roles: string[]) {
        await this.textfield.fill(text);
        await this.buttonLockPermissions.click();
        // handle setting permissions for the form field
    }
}