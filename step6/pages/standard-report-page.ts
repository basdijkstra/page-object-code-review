import {Locator, Page} from "playwright";
import {ReportBasePage} from "./report-base-page";
import {ReportContent} from "../dataobjects/report-content";

export class StandardReportPage extends ReportBasePage {

    readonly page: Page;
    readonly radioSelect: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.radioSelect = page.getByLabel('Extended report');
    }

    async create(report: ReportContent) {
        await this.reportFormFieldTitle.complete(report.title, report.roles);
        await this.reportFormFieldSummary.complete(report.summary, report.roles);
        await this.buttonSaveReport.click();
    }
}