import {ReportFormField} from "../components/report-form-field";
import {Locator, Page} from "playwright";
import {ReportBasePage} from "./report-base-page";

export class StandardReportPage extends ReportBasePage {

    readonly page: Page;
    readonly radioSelect: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.radioSelect = page.getByLabel('Extended report');
    }

    async create(title: string, summary: string, roles: string[]) {
        await this.reportFormFieldTitle.complete(title, roles);
        await this.reportFormFieldSummary.complete(summary, roles);
        await this.buttonSaveReport.click();
    }
}