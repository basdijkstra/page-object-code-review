import {expect, test} from "playwright/test";

test('Creating a standard report', async ({ page } ) => {

    await page.getByLabel('Standard report').click();
    await page.getByPlaceholder('Title').fill('My new report title');
    await page.getByPlaceholder('Summary').fill('Summary of the report');
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByTestId('standard-report-save-success')).toBeVisible();
});