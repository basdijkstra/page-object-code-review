import {Locator, Page} from "playwright";

export class RequestLoanResultPage {

    readonly page: Page;
    readonly textlabelResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textlabelResult = page.locator('#loanStatus');
    }

    async getResult(): Promise<Locator> {
        return this.textlabelResult;
    }
}