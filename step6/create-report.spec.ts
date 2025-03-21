import {expect, test} from "playwright/test";
import {StandardReportPage} from "./pages/standard-report-page";
import {ExtendedReportPage} from "./pages/extended-report-page";
import {ReportContent} from "./dataobjects/report-content";

test('Creating a standard report', async ({ page } ) => {

    let report: ReportContent = {
        title: 'My new report title',
        summary: 'Summary of the report',
        roles: ['admin', 'user']
    }

    const standardReportPage = new StandardReportPage(page);
    await standardReportPage.select();
    await standardReportPage.create(report);

    await expect(page.getByTestId('standard-report-save-success')).toBeVisible();
});

test('Creating an extended report', async ({ page } ) => {

    let report: ReportContent = {
        title: 'My new report title',
        summary: 'Summary of the report',
        additionalInfo: 'Additional information for the report',
        roles: ['admin', 'user']
    }

    const extendedReportPage = new ExtendedReportPage(page);
    await extendedReportPage.select();
    await extendedReportPage.create(report);

    await expect(page.getByTestId('extended-report-save-success')).toBeVisible();
});