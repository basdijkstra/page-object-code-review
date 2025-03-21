import {ReportFormField} from "../components/report-form-field";
import {Locator, Page} from "playwright";
import {ReportBasePage} from "./report-base-page";

export class ExtendedReportPage extends ReportBasePage {

    readonly page: Page;
    readonly radioSelect: Locator;
    readonly reportFormFieldAdditionalInfo: ReportFormField;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.radioSelect = page.getByLabel('Extended report');
        this.reportFormFieldAdditionalInfo = new ReportFormField(this.page, 'additionalInfo');
    }

    async create(title: string, summary: string, additionalInfo: string, roles: string[]) {
        await this.reportFormFieldTitle.complete(title, roles);
        await this.reportFormFieldSummary.complete(summary, roles);
        await this.reportFormFieldAdditionalInfo.complete(additionalInfo, roles);
        await this.buttonSaveReport.click();
    }
}