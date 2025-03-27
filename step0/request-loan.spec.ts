import {expect, test} from "playwright/test";

test('Applying for a 999 dollar loan', async ({ page } ) => {

    await page.goto('http://localhost:8080/parabank');

    await page.locator('[name=username]').fill('john');
    await page.locator('[name=password]').fill('demo');
    await page.getByRole('button', {name: 'Log In'}).click();

    await page.getByRole('link', {name: 'Request Loan'}).click();

    await page.locator('#amount').fill('999');
    await page.locator('#downPayment').fill('100');
    await page.locator('#fromAccountId').selectOption('12456');
    await page.getByRole('button', { name: 'Apply Now'}).click();

    await expect(page.locator('#loanStatus')).toBeVisible();
    await expect(page.locator('#loanStatus')).toHaveText('Approved');
});