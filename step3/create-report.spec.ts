import {expect, test} from "playwright/test";
import {StandardReportPage} from "./pages/standard-report-page";

test('Creating a standard report', async ({ page } ) => {

    const standardReportPage = new StandardReportPage(page);
    await standardReportPage.select();
    await standardReportPage.create('My new report title', 'Summary of the report', ['admin', 'user']);

    await expect(page.getByTestId('standard-report-save-success')).toBeVisible();
});