import {Locator, Page} from "playwright";
import {ReportFormField} from "../components/report-form-field";

export class StandardReportPage {

    readonly page: Page;
    readonly radioSelectStandard: Locator;
    readonly reportFormFieldTitle: ReportFormField;
    readonly reportFormFieldSummary: ReportFormField;
    readonly buttonSaveReport: Locator;
    readonly buttonPrintReport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.radioSelectStandard = page.getByLabel('Standard report');
        this.reportFormFieldTitle = new ReportFormField(this.page, 'title');
        this.reportFormFieldSummary = new ReportFormField(this.page, 'summary');
        this.buttonSaveReport = page.getByRole('button', { name: 'Save' });
        this.buttonPrintReport = page.getByRole('button', { name: 'Print' });
    }

    async select() {
        await this.radioSelectStandard.click();
    }

    async create(title: string, summary: string, roles: string[]) {
        await this.reportFormFieldTitle.complete(title, roles);
        await this.reportFormFieldSummary.complete(summary, roles);
        await this.buttonSaveReport.click();
    }

    async print() {
        await this.buttonPrintReport.click();
    }
}