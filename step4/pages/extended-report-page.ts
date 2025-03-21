import {Locator, Page} from "playwright";
import {ReportFormField} from "../components/report-form-field";

export class ExtendedReportPage {

    readonly page: Page;
    readonly radioSelectExtended: Locator;
    readonly reportFormFieldTitle: ReportFormField;
    readonly reportFormFieldSummary: ReportFormField;
    readonly reportFormFieldAdditionalInfo: ReportFormField;
    readonly buttonSaveReport: Locator;
    readonly buttonPrintReport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.radioSelectExtended = page.getByLabel('Extended report');
        this.reportFormFieldTitle = new ReportFormField(this.page, 'title');
        this.reportFormFieldSummary = new ReportFormField(this.page, 'summary');
        this.reportFormFieldAdditionalInfo = new ReportFormField(this.page, 'additionalInfo');
        this.buttonSaveReport = page.getByRole('button', { name: 'Save' });
        this.buttonPrintReport = page.getByRole('button', { name: 'Print' });
    }

    async select() {
        await this.radioSelectExtended.click();
    }

    async create(title: string, summary: string, additionalInfo: string, roles: string[]) {
        await this.reportFormFieldTitle.complete(title, roles);
        await this.reportFormFieldSummary.complete(summary, roles);
        await this.reportFormFieldAdditionalInfo.complete(additionalInfo, roles);
        await this.buttonSaveReport.click();
    }

    async print() {
        await this.buttonPrintReport.click();
    }
}