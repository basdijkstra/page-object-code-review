import {expect, test} from "playwright/test";
import {StandardReportPage} from "./pages/standard-report-page";
import {ExtendedReportPage} from "./pages/extended-report-page";

test('Creating a standard report', async ({ page } ) => {

    const standardReportPage = new StandardReportPage(page);
    await standardReportPage.select();
    await standardReportPage
        .create('My new report title', 'Summary of the report', ['admin', 'user']);

    await expect(page.getByTestId('standard-report-save-success')).toBeVisible();
});

test('Creating an extended report', async ({ page } ) => {

    const extendedReportPage = new ExtendedReportPage(page);
    await extendedReportPage.select();
    await extendedReportPage
        .create('My new report title', 'Summary of the report', 'Additional information for the report', ['admin', 'user']);

    await expect(page.getByTestId('extended-report-save-success')).toBeVisible();
});