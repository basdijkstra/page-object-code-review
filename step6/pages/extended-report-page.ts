import {ReportFormField} from "../components/report-form-field";
import {Locator, Page} from "playwright";
import {ReportBasePage} from "./report-base-page";
import {ReportContent} from "../dataobjects/report-content";

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

    async create(report: ReportContent) {
        await this.reportFormFieldTitle.complete(report.title, report.roles);
        await this.reportFormFieldSummary.complete(report.summary, report.roles);
        await this.reportFormFieldAdditionalInfo.complete(report.additionalInfo, report.roles);
        await this.buttonSaveReport.click();
    }
}