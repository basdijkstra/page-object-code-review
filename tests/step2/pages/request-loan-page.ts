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

    async applyForLoan(amount: string, downPayment: string, fromAccountId: string) {
        await this.textfieldLoanAmount.fill(amount);
        await this.textfieldDownPayment.fill(downPayment);
        await this.dropdownFromAccountId.selectOption(fromAccountId);
        await this.buttonDoApply.click();
    }
}