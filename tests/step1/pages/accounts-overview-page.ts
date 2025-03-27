import {Locator, Page} from "playwright";

export class AccountsOverviewPage {

    readonly page: Page;
    readonly linkRequestLoan: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkRequestLoan = page.getByRole('link', {name: 'Request Loan'});
    }

    async gotoRequestLoanForm() {
        await this.linkRequestLoan.click();
    }
}