import {expect, test} from "playwright/test";
import {StandardReportPage} from "./pages/standard-report-page";

test('Creating a standard report', async ({ page } ) => {

    const standardReportPage = new StandardReportPage(page);

    await standardReportPage.select();
    await standardReportPage.setTitle('My new report title');
    await standardReportPage.setSummary('Summary of the report');
    await standardReportPage.save();

    await expect(page.getByTestId('standard-report-save-success')).toBeVisible();
});