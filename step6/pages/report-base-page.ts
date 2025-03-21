import {Locator, Page} from "playwright";
import {ReportFormField} from "../components/report-form-field";
import {ReportContent} from "../dataobjects/report-content";

export abstract class ReportBasePage {

    readonly page: Page;
    readonly reportFormFieldTitle: ReportFormField;
    readonly reportFormFieldSummary: ReportFormField;
    readonly buttonSaveReport: Locator;
    readonly buttonPrintReport: Locator;

    abstract readonly radioSelect: Locator;

    protected constructor(page: Page) {
        this.page = page;
        this.reportFormFieldTitle = new ReportFormField(this.page, 'title');
        this.reportFormFieldSummary = new ReportFormField(this.page, 'summary');
        this.buttonSaveReport = page.getByRole('button', { name: 'Save' });
        this.buttonPrintReport = page.getByRole('button', { name: 'Print' });
    }

    abstract create(report: ReportContent): void;

    async select() {
        await this.radioSelect.click();
    }

    async print() {
        await this.buttonPrintReport.click();
    }
}