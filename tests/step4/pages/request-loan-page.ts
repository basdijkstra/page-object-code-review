import {Locator, Page} from "playwright";
import {LoanApplication} from "../dataobjects/loan-application";

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

    async applyForLoan(loanApplication: LoanApplication) {
        await this.textfieldLoanAmount.fill(loanApplication.amount.toString());
        await this.textfieldDownPayment.fill(loanApplication.downPayment.toString());
        await this.dropdownFromAccountId.selectOption(loanApplication.fromAccountId.toString());
        await this.buttonDoApply.click();
    }
}