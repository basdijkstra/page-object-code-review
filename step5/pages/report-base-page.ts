import {Locator, Page} from "playwright";
import {ReportFormField} from "../components/report-form-field";

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

    async select() {
        await this.radioSelect.click();
    }

    async print() {
        await this.buttonPrintReport.click();
    }
}