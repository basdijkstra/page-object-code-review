import {Locator, Page} from "playwright";

export class StandardReportPage {

    readonly page: Page;
    readonly radioSelectStandard: Locator;
    readonly textfieldTitle: Locator;
    readonly textfieldSummary: Locator;
    readonly buttonSaveReport: Locator;
    readonly buttonPrintReport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.radioSelectStandard = page.getByLabel('Standard report');
        this.textfieldTitle = page.getByPlaceholder('Title');
        this.textfieldSummary = page.getByPlaceholder('Summary');
        this.buttonSaveReport = page.getByRole('button', { name: 'Save' });
        this.buttonPrintReport = page.getByRole('button', { name: 'Print' });
    }

    async select() {
        await this.radioSelectStandard.click();
    }

    async create(title: string, summary: string) {
        await this.textfieldTitle.fill(title);
        await this.textfieldSummary.fill(summary);
        await this.buttonSaveReport.click();
    }

    async print() {
        await this.buttonPrintReport.click();
    }
}