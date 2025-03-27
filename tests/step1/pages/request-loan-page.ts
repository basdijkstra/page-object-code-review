import {Locator, Page} from "playwright";

export class RequestLoanPage {

    readonly page: Page;
    readonly textfieldLoanAmount: Locator;
    readonly textfieldDownPayment: Locator;
    readonly dropdownFromAccountId: Locator;
    readonly buttonDoApply: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textfieldLoanAmount = page.locator('#amount');
        this.textfieldDownPayment = page.locator('#downPayment');
        this.dropdownFromAccountId = page.locator('#fromAccountId');
        this.buttonDoApply = page.getByRole('button', { name: 'Apply Now' });
    }

    async setLoanAmount(amount: string) {
        await this.textfieldLoanAmount.fill(amount);
    }

    async setDownPayment(downPayment: string) {
        await this.textfieldDownPayment.fill(downPayment);
    }

    async selectFromAccountId(accountId: string) {
        await this.dropdownFromAccountId.selectOption(accountId);
    }

    async doApply() {
        await this.buttonDoApply.click();
    }
}